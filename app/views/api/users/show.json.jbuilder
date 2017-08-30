  json.basics do
    json.partial! 'api/users/user', user: @user
  end
  json.details do
    json.extract! @user.detail, :orientation, :gender, :height, :body_type,
                  :rel_type, :rel_status
  end

  json.about do
    json.extract! @user.profile, :summary, :six_things, :my_life,
                  :msg_me_if, :good_at, :faves, :private, :friday_night,
                  :thoughts, :first_thing
  end
