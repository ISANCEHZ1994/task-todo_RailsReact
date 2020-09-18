class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, methods: [ :lists, :tasks ]
    end

    def create

    end

    def show
        user = User.find_by_id (params[:id])
        render json: user
    end

end