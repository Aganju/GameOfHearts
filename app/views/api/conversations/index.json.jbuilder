json.array! @conversations do |conversation|
  json.convo_id conversation.id
  json.partial! 'api/conversations/conversation_partner',
                c_partner: conversation.other_user(current_user.id)

  json.last_message do
    json.partial! 'api/conversations/message', message: conversation.last_message
  end
end
