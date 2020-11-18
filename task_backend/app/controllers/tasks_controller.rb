class TasksController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        tasks = Task.all
        render json: tasks
    end
    
    def create
        task = Task.create(task_params)
    end

    def show
        task = Task.find_by_id (params[:id])
        render json: task
    end

    def update
        task = Task.find_by_id (params[:id])
        # byebug
        task.update(task_params)
        render json: task
    end

    private
    def task_params
        params.require(:task).permit(:description)
    end

end