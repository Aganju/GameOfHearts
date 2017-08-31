json.questions @questions do |question|
  json.extract! question, :id, :question_text
  json.answerChoices question.answer_choices do |answer_choice|
    json.extract! answer_choice, :id, :answer_text
  end
end
