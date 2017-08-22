```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Guest',
       image_url: '/images/1',
       Profile_url: ‘/profiles/1’,
       Match: 25,
       Liked: false,
       Location: astoria, ny,
      },
      2: {
        id: 2,
        Username: ‘guest2’,
       image_url: '/images/2',
       Profile_url: ‘/profiles/2’,
       Match: 70,
       Liked: true,
       Location: 'boston, ma',
      },
    },
   Messages:{
     1: {
      	User_id: 1,
      	Content: lorem ipsum,
      }
     2: {
      	User_id: 2,
      	Content: lorem ipsum,
      }
    }
    Conversations:{
      1: {
        user_id: 2,
        last_msg: hey,
      }
    }
   Messages: {
     1:{
       content: 'hey there',
       conversations_id: 2,
     }

   },
   Questions: {
     1: {
       question_id : 1,
       question_body: 'have you ever',
       answers:[
        'done this',
        'done that'
       ]
     }
   }
   Question Answers: {
      1: {
        Question id : 1,
        Answer id: 3,
        user_id: 1
      },
      2: {
       question_ id : 2,
        Answer id: 1,
        user_id: 1
      }
    },
    Profiles: {
       1: {
         User_id:  1
        About_me: lorem ipsum et dolores
        Likes: tea, ginger, cats
        	Message_me_if: you like cats
          details:{
            age: 25
            sex: 'female'
            orientation: 'straight'
          }
        }
    }
   },
  ui: {
    users_loading: true/false,
    questions_loading: true/false
    login_modal: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    Question:  ["Question answer cannot be blank"],
  },
  session: {
    id: 1,
    username: 'Guest',
    image_url: '/1/guest'
  }
}
