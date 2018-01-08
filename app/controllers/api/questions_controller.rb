class Api::QuestionsController < ApplicationController
  before_action :require_logged_in

  def index
    @questions = Question.includes(:answer_choices)
                         .where.not(id: current_user.questions.ids).limit(10)
    render 'api/questions/_questions'
  end

  def create
    @question_answers = current_user.question_answers
    @question_answers << QuestionAnswer.new(question_params)
    @questions = current_user.questions.includes(:answer_choices)
    render :show
  end

  def show
    user = User.find(params[:id])
    @questions = user.questions.includes(:answer_choices)
    @question_answers = user.question_answers
    render :show
  end

  def update
    current_answer = QuestionAnswer.find(params[:id])
    if current_answer.user == current_user
      current_answer.update!(question_params)
      @question_answers = current_user.question_answers
      render 'api/questions/_question_answers'
    else
      render json: 'Unauthorized', status: 401
    end
  end

  def destroy
    @question_answers = [ QuestionAnswer.find(params[:id]).delete ]
    render 'api/questions/_question_answers'
  end

  private

  def question_params
    params.require(:question).permit(:answer_id)
  end
end
