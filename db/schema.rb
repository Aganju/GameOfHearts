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

ActiveRecord::Schema.define(version: 20180111200449) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "answer_text"
    t.integer  "question_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree

  create_table "conversations", force: :cascade do |t|
    t.integer  "first_user_id",   null: false
    t.integer  "second_user_id",  null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "last_message_id"
  end

  add_index "conversations", ["first_user_id", "second_user_id"], name: "index_conversations_on_first_user_id_and_second_user_id", unique: true, using: :btree
  add_index "conversations", ["second_user_id"], name: "index_conversations_on_second_user_id", using: :btree

  create_table "details", force: :cascade do |t|
    t.integer  "user_id",               null: false
    t.date     "birthdate",             null: false
    t.string   "gender",                null: false
    t.float    "latitude",              null: false
    t.float    "longitude",             null: false
    t.string   "orientation"
    t.integer  "height"
    t.string   "body_type"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "address"
    t.string   "main_img_file_name"
    t.string   "main_img_content_type"
    t.integer  "main_img_file_size"
    t.datetime "main_img_updated_at"
    t.string   "rel_type"
    t.string   "rel_status"
  end

  add_index "details", ["user_id"], name: "index_details_on_user_id", unique: true, using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "conversation_id", null: false
    t.integer  "user_id",         null: false
    t.string   "body",            null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "messages", ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

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

  create_table "question_answers", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "answer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "question_answers", ["user_id"], name: "index_question_answers_on_user_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "question_text", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

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
