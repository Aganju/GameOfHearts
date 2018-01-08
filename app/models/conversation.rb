class Conversation < ActiveRecord::Base
  validates :first_user, :second_user, presence: true
  validates :last_message, presence: true, allow_blank: false

  belongs_to :first_user, class_name: :User
  belongs_to :second_user, class_name: :User
  has_many :messages

  def includes_user(user)
    user.id == self.first_user_id || user.id == self.second_user_id
  end
end
