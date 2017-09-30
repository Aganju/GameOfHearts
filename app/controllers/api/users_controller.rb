class Api::UsersController < ApplicationController

  def index
    @details = Detail.all.includes(:user)
    if params[:user]
      s_params = search_params
      s_params[:min_age] = s_params[:min_age].to_i.years.ago
      s_params[:max_age] = s_params[:max_age].to_i.years.ago
      @details = current_user.detail
        .nearbys(s_params[:distance])
        .where('gender = :gender AND orientation = :orientation AND
                birthdate >= :max_age AND birthdate <= :min_age', s_params)
        .includes(:user)
    end
  end

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
    @user = User.includes(:profile, :detail).where(username: params[:id])[0]
    if @user
      render :show
    else
      render json: 'No Such User', status: 401
    end
  end

  def update
    current_user.detail.update(detail_params)
    current_user.profile.update(profile_params)
    if current_user.save
      @user = current_user
      render :show
    else
      render json: current_user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def detail_params
    params.require(:user).permit(:birthdate, :gender, :zipcode,
                                 :orientation, :height, :body_type,
                                 :rel_type, :rel_status, :main_img)
  end

  def profile_params
    params.require(:user).permit(:summary, :six_things, :my_life,
                                 :msg_me_if, :good_at, :faves, :private,
                                 :friday_night, :thoughts, :first_thing)
  end

  def search_params
    params.require(:user).permit(:gender, :orientation,
                                 :min_age, :max_age, :distance)
  end
end
