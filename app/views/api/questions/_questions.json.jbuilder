json.questions @questions do |question|
  json.extract! question, :id, :question_text, :answer_choice_ids
end

answer_choices = []
@questions.each do |question|
  answer_choices.concat(question.answer_choices)
end

json.answers answer_choices do |answer_choice|
  json.extract! answer_choice, :id, :answer_text
end
