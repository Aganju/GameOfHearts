# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170825192613) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "details", force: :cascade do |t|
    t.integer  "user_id",               null: false
    t.date     "birthdate",             null: false
    t.string   "gender",                null: false
    t.float    "latitude",              null: false
    t.float    "longitude",             null: false
    t.string   "orientation"
    t.string   "height"
    t.string   "body_type"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "address"
    t.string   "main_img_file_name"
    t.string   "main_img_content_type"
    t.integer  "main_img_file_size"
    t.datetime "main_img_updated_at"
  end

  add_index "details", ["user_id"], name: "index_details_on_user_id", unique: true, using: :btree

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.text     "summary"
    t.text     "six_things"
    t.text     "my_life"
    t.text     "msg_me_if"
    t.text     "good_at"
    t.text     "faves"
    t.text     "private"
    t.text     "friday_night"
    t.text     "thoughts"
    t.text     "first_thing"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "profiles", ["user_id"], name: "index_profiles_on_user_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
