class Carts < ActiveRecord::Migration[7.0]
  def change
    create_table :cart do |t|
      t.string :product_name
      t.float :product_price
      t.string :product_img
    end
  end
end
