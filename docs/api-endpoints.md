# API endpoints

## HTML API

### Root
 - 'GET /' - loads app

## JSON API

### Users
 - 'GET /api/users' a list of users based on current search criteria
 - 'GET /api/users/:id' return specific users info
 - 'POST /api/users/' create a new user
 - 'PATCH /api/users/' edit preferences
 - 'DELETE /api/users/' destroy account

### Session
 - 'POST /api/session' log in user
 - 'DELETE /api/session' log out user

### Messages
 - 'GET /api/conversations' last message and all conversations for current user
 - 'GET /api/conversations/:id' return specific conversation and messages
 - 'POST /api/conversations/' create a new conversation param with message and user_id
 - 'PATCH /api/conversations/:id' add message to conversation
 - 'DELETE /api/conversations/:id' delete message thread

### Questions
 - 'GET /api/questions' all questions and answers for current user
 - 'GET /api/questions/new' list of unanswered questions for current user
 - 'POST /api/questions/' answer new question
 - 'GET /api/questions/:user_id' return questions and answers for other user
 - 'PATCH /api/questions/:id' update question answer
 - 'DELETE /api/questions/:id' delete question answer
