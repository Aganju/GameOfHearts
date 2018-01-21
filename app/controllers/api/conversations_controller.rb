class Api::ConversationsController < ApplicationController
  before_action :require_logged_in

  def index
    @conversations = current_user.conversations.order(updated_at: :desc)
  end

  def create
    new_convo = conversation_params

    @conversation = Conversation.new(second_user_id: new_convo[:second_user_id])
    @conversation.first_user = current_user

    new_message = Message.new(body: new_convo[:message])
    new_message.user = current_user

    new_message.conversation = @conversation
    @conversation.last_message = new_message

    Conversation.transaction do
      @conversation.save!
      new_message.save!
    end

    if @conversation.persisted?
      @messages = [new_message]
      render :show
    else
      render json:
        @conversation.errors.full_messages + new_message.errors.full_messages,
        status: 422
    end
  end

  def show
    @conversation = Conversation.find(params[:id])

    if @conversation.includes_user(current_user)
      @messages = @conversation.messages.order(:updated_at)
      render :show
    else
      render json: 'Unauthorized', status: 401
    end

  end

  def update
    @conversation = Conversation.find(params[:id])

    if @conversation.includes_user(current_user)
      new_message = Message.new(body: conversation_params[:message])
      new_message.user = current_user
      new_message.conversation = @conversation
      if new_message.save
        @conversation.update(last_message: new_message)
        @messages = @conversation.messages.order(:updated_at)
        render :show
      else
        render json new_message.error.full_messages, status: 422
      end
    else
      render json: 'Unauthorized', status: 401
    end
  end

  def destroy
  end

  private

  def conversation_params
    params.require(:conversation).permit(:second_user_id, :message)
  end


end
