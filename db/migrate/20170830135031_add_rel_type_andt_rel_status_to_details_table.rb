class AddRelTypeAndtRelStatusToDetailsTable < ActiveRecord::Migration
  def change
    add_column :details, :rel_type, :string
    add_column :details, :rel_status, :string
  end
end
