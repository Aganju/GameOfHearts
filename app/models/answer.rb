class Answer < ActiveRecord::Base
  validates :answer_text, :question, presence: true

  belongs_to :question
  has_many :question_answers
end
