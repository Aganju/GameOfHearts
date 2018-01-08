class ChangeLastMessageColumnToLastMessageId < ActiveRecord::Migration
  def change
    remove_column :conversations, :last_message
    add_column :conversations, :last_message_id, :integer, null: false
  end
end
