class Task < ApplicationRecord
    has_many :list_task_joiners
    has_many :lists, through: :list_task_joiners
end
