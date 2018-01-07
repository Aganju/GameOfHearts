class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :first_user_id, null: false
      t.integer :second_user_id, null: false

      t.timestamps null: false
    end

    add_index :conversations, :first_user_id
    add_index :conversations, :second_user_id
  end
end
