class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :comments
      t.float :star_rating
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :product_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
