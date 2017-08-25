class CreateDetails < ActiveRecord::Migration
  def change
    create_table :details do |t|
      t.integer :user_id, null: false
      t.date :birthdate, null: false
      t.string :gender, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :main_img_url
      t.string :orientation
      t.string :height
      t.string :body_type

      t.timestamps null: false
    end

    add_index :details, :user_id, unique: true
  end
end
