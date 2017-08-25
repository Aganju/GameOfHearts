class RemoveMainImgFromDetatilsAndAddAttatchment < ActiveRecord::Migration
  def change
    add_attachment :details, :main_img
    remove_column :details, :main_img_url
  end
end
