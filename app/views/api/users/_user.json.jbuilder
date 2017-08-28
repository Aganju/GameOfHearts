json.extract! user, :username
json.age user.detail.age
json.address user.detail.address.split(',')[0..-2].join(',')
json.main_img_url user.detail.main_img.url
