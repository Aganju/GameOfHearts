# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
q1 = Question.create(questiontext: 'Whats most important to you?')
q1.answers.push(answer_text: 'Honesty')
q1.answers.push(answer_text: 'Power')
q1.answers.push(answer_text: 'Money')
q1.answers.push(answer_text: 'Family')
q1.answers.push(answer_text: 'Strength')

q2 = Question.create(questiontext: 'Which of these houses are you allied to?')
q2.answers.push(answer_text: 'Stark')
q2.answers.push(answer_text: 'Lannister')
q2.answers.push(answer_text: 'Targaryen')
q2.answers.push(answer_text: 'Greyjoy')

q3 = Question.create(questiontext: 'Is winter coming?')
q3.answers.push(answer_text: 'Yesterday!')
q3.answers.push(answer_text: 'Yes')
q3.answers.push(answer_text: 'No')
q3.answers.push(answer_text: 'What is winter?')

q4 = Question.create(questiontext: 'All men must what?')
q4.answers.push(answer_text: 'Die.')
q4.answers.push(answer_text: 'Fight')
q4.answers.push(answer_text: 'Live')

q5 = Question.create(questiontext: 'What wins wars?')
q5.answers.push(answer_text: 'Gold')
q5.answers.push(answer_text: 'Men')
q5.answers.push(answer_text: 'Honor')
q5.answers.push(answer_text: 'Red weddings')

q6 = Question.create(questiontext: 'Do you fight your own battles?')
q6.answers.push(answer_text: 'I do my own executions.')
q6.answers.push(answer_text: 'That\'s what I have guards for!')

q7 = Question.create(questiontext: 'Weapon of choice?')
q7.answers.push(answer_text: 'Sword')
q7.answers.push(answer_text: 'Knowledge')
q7.answers.push(answer_text: 'Poison')
q7.answers.push(answer_text: 'My little birds')

q8 = Question.create(questiontext: 'You killed a person, why?')
q8.answers.push(answer_text: 'They were on my list')
q8.answers.push(answer_text: 'Bored')
q8.answers.push(answer_text: 'They were betwen me and the throne')

q9 = Question.create(questiontext: 'Do you lead, follow or go your own way')
q9.answers.push(answer_text: 'Lead')
q9.answers.push(answer_text: 'Follow')
q9.answers.push(answer_text: 'Just me and Needle')

q10 = Question.create(questiontext: 'Dragons or Direwolves?')
q10.answers.push(answer_text: 'Dragons')
q10.answers.push(answer_text: 'Direwolves')
q10.answers.push(answer_text: 'Other(s)')

q11 = Question.create(questiontext: 'Who is your ruler?')
q11.answers.push(answer_text: 'Cersei Lannister')
q11.answers.push(answer_text: 'Jon Snow')
q11.answers.push(answer_text: 'Aegon Targaryen')
q11.answers.push(answer_text: 'Daenerys Targaryen')

q12 = Question.create(questiontext: 'Which of these feels right?')
q12.answers.push(answer_text: 'Fire and blood')
q12.answers.push(answer_text: 'Ours is the fury')
q12.answers.push(answer_text: 'Winter is coming')
q12.answers.push(answer_text: 'Sword in the darkness')
