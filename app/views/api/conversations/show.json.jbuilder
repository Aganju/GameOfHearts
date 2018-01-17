if @conversation.first_user == current_user
  json.first_user true
  json.user_id @conversation.second_user_id
else
  json.first_user false
  json.user_id @conversation.first_user_id
end

json.extract! @conversation, :id

json.messages @messages do |message|
  json.partial! 'api/conversations/message', message: message
end
