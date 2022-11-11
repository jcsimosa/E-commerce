class User < ApplicationRecord
    has_many :reviews
    has_many :products,through: :reviews

    validates :email,:name,:address,:password, presence: true
    validates :email, uniqueness: true

    has_secure_password
end
