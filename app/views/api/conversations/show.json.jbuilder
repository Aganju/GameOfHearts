json.user_id @conversation.other_user(current_user.id).id

json.extract! @conversation, :id

json.messages @messages do |message|
  json.partial! 'api/conversations/message', message: message
end
