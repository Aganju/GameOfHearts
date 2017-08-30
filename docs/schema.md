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
summary         | text    |
six_things      | text    |
my_life         | text    |
msg_me_if       | text    |
good_at         | text    |
faves           | text    |
image_url       | string  |
private         | text    |
friday_night    | text    |
thoughts        | text    |
first_thing     | text    |

## details
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique, foreign key
birthday        | date      | not null
gender          | string    | not null
latitude        | float     | not null, indexed
longitude       | float     | not null, indexed
address         | string    | not null
main_img        |attatchment|
orientation     | string    |
rel_type        | string    |
rel_status      | string    |
height          | integer   |
body_type       | string    |

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_text   | string    | not null

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, indexed, foreign_key
answer_text    | string    | not null

## questions_answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique, foreign key
answer_id       | id        | not null, indexed, foreign_key

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
