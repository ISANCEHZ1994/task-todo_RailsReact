class ListTaskJoinersController < ApplicationController

    def index
        ltj = ListTaskJoiner.all
        render json: ltj
    end
    
    def create
        
    end

end