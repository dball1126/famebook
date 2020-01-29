class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username, :string, null: false

    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :birthday, :date, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :bio, :string
    add_column :users, :workplace, :string
    add_column :users, :hometown, :string
    add_column :users, :current_city, :string
    add_column :users, :title, :string
    add_column :users, :school, :string
  end
end
