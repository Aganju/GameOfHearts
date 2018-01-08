class Message < ActiveRecord::Base
  validates :conversation, :user, presence: true
  validates :body, presence: true, allow_blank: false

  belongs_to :conversation
  belongs_to :user
end
