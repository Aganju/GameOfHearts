class Message < ActiveRecord::Base
  validates :conversation, :user, presence: true

  belongs_to :conversation
  belongs_to :user
end
