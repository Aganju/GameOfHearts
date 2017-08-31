json.questions_answers @question_answers do |question_answer|
  json.extract! question_answer, :id, :user_id, :answer_id
  json.question_id question_answer.question.id
end
