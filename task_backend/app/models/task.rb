class Task < ApplicationRecord
    has_many :list_task_joiners
    has_many :list, through: :list_task_joiners
end
