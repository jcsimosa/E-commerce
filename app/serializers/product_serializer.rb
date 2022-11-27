class ProductSerializer < ActiveModel::Serializer
  attributes :id,:name,:img,:description,:price

  has_many :reviews
end
