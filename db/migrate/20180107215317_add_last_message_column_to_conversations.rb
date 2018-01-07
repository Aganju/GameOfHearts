class AddLastMessageColumnToConversations < ActiveRecord::Migration
  def change
    add_column :conversations, :last_message, :string, null: false
  end
end
