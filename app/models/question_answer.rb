class QuestionAnswer < ActiveRecord::Base
  validates :user, :answer, presence: true

  belongs_to :answer
  belongs_to :user

  has_one :question, through: :answer
end
