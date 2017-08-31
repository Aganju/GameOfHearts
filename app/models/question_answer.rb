class QuestionAnswer < ActiveRecord::Base
  validates :user, :answer, presence: true
  validate :question_answered, :same_question
  belongs_to :answer
  belongs_to :user

  has_one :question, through: :answer

  def question_answered
    if !self.persisted? && user.questions.include?(answer.question)
      errors.add(:answer, "to this question already exists")
    end
  end

  def same_question
    if self.persisted? &&
       answer.question_id != Answer.find(answer_id_was).question_id

      errors.add(:question, "can't be changed")
    end
  end
end
