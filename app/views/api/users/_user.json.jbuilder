json.extract! user, :username, :email
json.extract! user.detail, :age, :address
json.main_img_url user.detail.main_img.url
