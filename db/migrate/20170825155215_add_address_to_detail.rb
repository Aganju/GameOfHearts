class AddAddressToDetail < ActiveRecord::Migration
  def change
    add_column :details, :address, :string
  end
end
