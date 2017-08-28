json.extract! user, :username
json.extract! user.detail, :age, :address
json.main_img_url user.detail.main_img.url
