class ProductSerializer < ActiveModel::Serializer
  attributes :id,:name,:img,:description,:price
end
