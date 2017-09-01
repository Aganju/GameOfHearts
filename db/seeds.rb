# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Question.destroy_all

q1 = Question.create(question_text: 'Whats most important to you?')
q1.answer_choices.push(Answer.new(answer_text: 'Honesty'))
q1.answer_choices.push(Answer.new(answer_text: 'Power'))
q1.answer_choices.push(Answer.new(answer_text: 'Money'))
q1.answer_choices.push(Answer.new(answer_text: 'Family'))
q1.answer_choices.push(Answer.new(answer_text: 'Strength'))

q2 = Question.create(question_text: 'Which of these houses are you allied to?')
q2.answer_choices.push(Answer.new(answer_text: 'Stark'))
q2.answer_choices.push(Answer.new(answer_text: 'Lannister'))
q2.answer_choices.push(Answer.new(answer_text: 'Targaryen'))
q2.answer_choices.push(Answer.new(answer_text: 'Greyjoy'))

q3 = Question.create(question_text: 'Is winter coming?')
q3.answer_choices.push(Answer.new(answer_text: 'Yesterday!'))
q3.answer_choices.push(Answer.new(answer_text: 'Yes'))
q3.answer_choices.push(Answer.new(answer_text: 'No'))
q3.answer_choices.push(Answer.new(answer_text: 'What is winter?'))

q4 = Question.create(question_text: 'All men must what?')
q4.answer_choices.push(Answer.new(answer_text: 'Die.'))
q4.answer_choices.push(Answer.new(answer_text: 'Fight'))
q4.answer_choices.push(Answer.new(answer_text: 'Live'))

q5 = Question.create(question_text: 'What wins wars?')
q5.answer_choices.push(Answer.new(answer_text: 'Gold'))
q5.answer_choices.push(Answer.new(answer_text: 'Men'))
q5.answer_choices.push(Answer.new(answer_text: 'Honor'))
q5.answer_choices.push(Answer.new(answer_text: 'Red weddings'))

q6 = Question.create(question_text: 'Do you fight your own battles?')
q6.answer_choices.push(Answer.new(answer_text: 'I do my own executions.'))
q6.answer_choices.push(Answer.new(answer_text: 'That\'s what I have guards for!'))

q7 = Question.create(question_text: 'Weapon of choice?')
q7.answer_choices.push(Answer.new(answer_text: 'Sword'))
q7.answer_choices.push(Answer.new(answer_text: 'Knowledge'))
q7.answer_choices.push(Answer.new(answer_text: 'Poison'))
q7.answer_choices.push(Answer.new(answer_text: 'My little birds'))

q8 = Question.create(question_text: 'You killed a person, why?')
q8.answer_choices.push(Answer.new(answer_text: 'They were on my list'))
q8.answer_choices.push(Answer.new(answer_text: 'Bored'))
q8.answer_choices.push(Answer.new(answer_text: 'They were betwen me and the throne'))

q9 = Question.create(question_text: 'Do you lead, follow or go your own way')
q9.answer_choices.push(Answer.new(answer_text: 'Lead'))
q9.answer_choices.push(Answer.new(answer_text: 'Follow'))
q9.answer_choices.push(Answer.new(answer_text: 'Just me and Needle'))

q10 = Question.create(question_text: 'Dragons or Direwolves?')
q10.answer_choices.push(Answer.new(answer_text: 'Dragons'))
q10.answer_choices.push(Answer.new(answer_text: 'Direwolves'))
q10.answer_choices.push(Answer.new(answer_text: 'Other(s)'))

q11 = Question.create(question_text: 'Who is your ruler?')
q11.answer_choices.push(Answer.new(answer_text: 'Cersei Lannister'))
q11.answer_choices.push(Answer.new(answer_text: 'Jon Snow'))
q11.answer_choices.push(Answer.new(answer_text: 'Aegon Targaryen'))
q11.answer_choices.push(Answer.new(answer_text: 'Daenerys Targaryen'))

q12 = Question.create(question_text: 'Which of these feels right?')
q12.answer_choices.push(Answer.new(answer_text: 'Fire and blood'))
q12.answer_choices.push(Answer.new(answer_text: 'Ours is the fury'))
q12.answer_choices.push(Answer.new(answer_text: 'Winter is coming'))
q12.answer_choices.push(Answer.new(answer_text: 'Sword in the darkness'))
