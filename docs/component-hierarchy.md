## Component Hierarchy

**LandingContainer**
 - Login-header
 - Sign-Up Form

**Header**

**Footer**

**SearchPrefsContainer**
 - LookingFor
 - SearchBy

**UserIndexContainer**
 - User
**UserHeader**

**ProfileContainer**
 - ProfDetails
 - ProfFacts

**QuestionsContainer**
 - Question

**ConversationsIndexContainer**
 - ConversationIndexItem

**ConversationContainer**
 - Message
 - NewMessageForm

##Routes
|Path   | Component   |
|-------|-------------|
| "/landing" | "LandingContainer" |
| "/" | "Header" |
| "/" | "Footer" |
| "/browse" | "SearchPrefsContainer" |
| "/browse" | "UserIndexContainer" |
| "/users/:id" | "ProfileContainer" |
| "/users/:id/questions" | "QuestionsContainer" |
| "/users/:id/messages" | "ConversationsIndexContainer" |
| "/users/:id/messages/:m_id" | "ConversationContainer" |
