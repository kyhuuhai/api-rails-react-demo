class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :description
      t.references :user
      t.timestamps
    end
  end
end
