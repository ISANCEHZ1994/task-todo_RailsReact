class ListsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        lists = List.all
        render json: lists
    end

    def show
        list = List.find_by_id (params[:id])
        render json: list
    end
    
    def create
        list = List.create(list_params)
        
    end

    def update
        list = List.find_by_id (params[:id])
        # byebug
        list.update(list_params)
        render json: list
    end

    private
    def list_params
        params.require(:list).permit(:title)
    end

end