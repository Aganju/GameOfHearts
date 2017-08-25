class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.text :summary
      t.text :six_things
      t.text :my_life
      t.text :msg_me_if
      t.text :good_at
      t.text :faves
      t.string :image_url
      t.text :private
      t.text :friday_night
      t.text :thoughts
      t.text :first_thing

      t.timestamps null: false
    end
    add_index :profiles, :user_id, unique: true
  end
end
