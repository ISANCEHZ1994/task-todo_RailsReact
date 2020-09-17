class User < ApplicationRecord
    has_many :lists
    has_many :list_task_joiners, through: :lists 
end
