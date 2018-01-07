class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :conversation_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
    end

    add_index :messages, :conversation_id
    add_index :messages, :user_id
  end
end
