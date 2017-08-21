# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profile
column name     | data type | details
----------------|-----------|-----------------------
id              | integer | not null, primary key
user_id         | integer | not null, indexed, unique, foreign_key
summary         | text    | not null
six_things      | text    | not null
my_life         | text    | not null
msg_me_if       | text    | not null
good_at         | text    | not null
faves           | text    | not null
image_url       | string  | not null
private         | text    | not null
friday_night    | text    | not null
thoughts        | text    | not null
first_thing     | text    | not null

## details
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique, foreign key
age             | integer   | not null
gender          | string    | not null
orientation     | string    | not null
height          | string    | not null
body_type       | string    | not null

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_text   | string    | not null
answers         | array     | not null

## questions_answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique, foreign key
question_id     | integer   | not null, indexed, foreign_key
answer_index    | index     | not null

## conversations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_user_id   | integer   | not null, indexed, foreign key
second_user_id  | integer   | not null, indexed, foreign key

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
conversation_id | integer   | not null, indexed
user_id         | integer   | not null, indexed, foreign key
body            | string    | not null
