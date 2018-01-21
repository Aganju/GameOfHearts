json.convo_id @conversation.id

json.partial! 'api/conversations/conversation_partner',
              c_partner: @conversation.other_user(current_user.id)

json.messages @messages do |message|
  json.partial! 'api/conversations/message', message: message
end
