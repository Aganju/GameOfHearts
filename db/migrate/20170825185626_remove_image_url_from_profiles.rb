class RemoveImageUrlFromProfiles < ActiveRecord::Migration
  def change
    remove_column :profiles, :image_url
  end
end
