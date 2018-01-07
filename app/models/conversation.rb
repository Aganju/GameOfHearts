class Conversation < ActiveRecord::Base
  validates :first_user, :second_user, presence: true

  belongs_to :first_user, class_name: :User
  belongs_to :second_user, class_name: :User
end
