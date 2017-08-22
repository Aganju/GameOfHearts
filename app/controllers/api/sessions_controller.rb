class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(user)
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['Not logged in'], status: 404
    end
  end
end
