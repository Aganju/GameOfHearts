json.array! @details do |detail|
  json.partial! 'api/users/user', user: detail.user
end
