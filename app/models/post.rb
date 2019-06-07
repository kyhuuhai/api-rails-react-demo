class Post < ApplicationRecord
    belongs_to :user

    scope :search, -> (term) {where("name LIKE ? OR description LIKE ?", "%#{term}%", "%#{term}%")}
end
