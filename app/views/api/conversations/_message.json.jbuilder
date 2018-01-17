json.extract! message, :body
json.sender message.user_id
json.message_sent message.updated_at
