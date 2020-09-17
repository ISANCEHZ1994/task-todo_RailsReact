class CreateListTaskJoiners < ActiveRecord::Migration[6.0]
  def change
    create_table :list_task_joiners do |t|
      t.integer :list_id
      t.integer :task_id

      t.timestamps
    end
  end
end
