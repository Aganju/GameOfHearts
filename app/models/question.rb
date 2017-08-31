class Question < ActiveRecord::Base
  validates :question_text, presence: true

  has_many :answer_choices,
           class_name: :Answer

  has_many :responses, through: :answer_choices, source: :question_answers
  has_many :responders, through: :responses, source: :user
end
