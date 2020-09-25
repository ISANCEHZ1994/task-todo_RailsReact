class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists
    end
    
    def create
        list = List.create(list_params)
    end

    def update
        list = List.find_by_id (params[:id])
        list.update(lists: params[:title])
    end

    private
    def list_params
        params.require(:list).permit(:title)
    end

end