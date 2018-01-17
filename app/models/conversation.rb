class Conversation < ActiveRecord::Base
  validates :first_user, :second_user, presence: true
  validates :last_message, presence: true, on: :update

  belongs_to :first_user, class_name: :User
  belongs_to :second_user, class_name: :User

  has_many :messages
  belongs_to :last_message, class_name: :Message

  def includes_user(user)
    user.id == self.first_user_id || user.id == self.second_user_id
  end

  def other_user(user_id)
    user_id == self.first_user_id ? self.second_user : self.first_user
  end
end
