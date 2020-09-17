class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :task_id

      t.timestamps
    end
  end
end
