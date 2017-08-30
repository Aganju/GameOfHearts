json.extract! user, :username
json.age user.detail.age
json.address user.detail.address.split(',')[0..-2].join(',')
json.main_img_url asset_path(user.detail.main_img.url(:original))
