class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.detail = Detail.new(detail_params)
    @user.profile = Profile.new

    if @user.save
      login(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.include(:profile, :detail).find_by(username: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def detail_params
    params.require(:user).permit(:birthdate, :gender, :zipcode,
                                 :orientation, :height, :body_type)
  end

  def profile_params
    params.require(:user).permit(:summary, :six_things, :my_life,
                                 :msg_me_if, :good_at, :faves, :private,
                                 :friday_night, :thoughts, :first_thing)
  end
end
