class ChangeLastMessageColumnToAllowNull < ActiveRecord::Migration
  def change
    remove_column :conversations, :last_message_id
    add_column :conversations, :last_message_id, :integer
  end
end
