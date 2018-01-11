class AddUniqueIndexToConversations < ActiveRecord::Migration
  def change
    remove_index :conversations, :first_user_id
    add_index :conversations, [:first_user_id, :second_user_id], unique: true
  end
end
