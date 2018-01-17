json.array! @conversations do |conversation|
  c_partner = conversation.other_user(current_user.id)
  json.user_img_url asset_path(c_partner.detail.main_img.url(:original))
  json.username c_partner.username

  json.last_message do
    json.partial! 'api/conversations/message', message: conversation.last_message
  end
end
