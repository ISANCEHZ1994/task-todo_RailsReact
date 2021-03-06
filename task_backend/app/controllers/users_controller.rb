class UsersController < ApplicationController
    
    skip_before_action :verify_authenticity_token

    def index
        users = User.all
        render json: users, methods: [ :lists, :tasks ]
    end

    def create
        user = User.create(user_params)
    end

    def show
        user = User.find_by_id (params[:id])
        render json: user, methods: [ :lists, :tasks ]
    end

    # def edit
    #    user = User.find_by_id (params[:id])
    # end

    def update
        user = User.find_by_id(params[:id])
        # byebug
        # user.update(lists: params[:title], tasks: params[:description])
        render json: user, methods: [ :lists, :tasks ]
    end

    private
    def user_params
        # params.require(:client).permit(:name, :email, :password, :phone_number)
        params.require(:user).permit(:name, :email)
    end

    # def user_update
        
    # end

end