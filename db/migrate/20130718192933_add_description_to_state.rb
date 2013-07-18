class AddDescriptionToState < ActiveRecord::Migration
  def change
    add_column :states, :description, :string
  end
end
