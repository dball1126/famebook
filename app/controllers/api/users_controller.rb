class Api::UsersController < ApplicationController
    def new
        @user = User.new
    end

    def index
        @users = User.all
        render "api/posts/index"
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user
    end

    private
    def user_params
        params.require(:user).permit(
                                     :password, 
                                     :email, 
                                     :first_name, 
                                     :last_name,
                                     :gender,
                                     :birthday,
                                     :image
                                     )
    end
end