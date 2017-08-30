class ChangeDetailsHeightColumnToString < ActiveRecord::Migration
  def change
    change_column :details, :height, 'integer USING CAST(height AS integer)'
  end
end
