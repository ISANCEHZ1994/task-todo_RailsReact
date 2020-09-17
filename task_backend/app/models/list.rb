class List < ApplicationRecord
    belongs_to :user
    has_many :list_task_joiners
    has_many :tasks, through: :list_task_joiners
end
