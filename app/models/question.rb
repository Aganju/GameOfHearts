class Question < ActiveRecord::Base
  validates :question_text, presence: true

  has_many :answers
end
