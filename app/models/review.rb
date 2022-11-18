class Review < ApplicationRecord
    belongs_to :user
    belongs_to :product

    def review_with_user
        self.user.name
    end

end
