class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, methods: [ :lists, :tasks ]
    end

    def create
        user = User.create(user_params)
    end

    def show
        user = User.find_by_id (params[:id])
        render json: user
    end

    def user_params
        # params.require(:client).permit(:name, :email, :password, :phone_number)
        params.require(:user).permit(:name, :email)
    end

end