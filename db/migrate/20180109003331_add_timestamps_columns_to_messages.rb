class AddTimestampsColumnsToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :created_at, :datetime, null: false
    add_column :messages, :updated_at, :datetime, null: false
  end
end
