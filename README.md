# GameOfHearts

[GOHearts live](https://www.google.com "Game Of Hearts live")

GameOfHearts is a game of thrones themed take on the dating website genre.
It is a full-stack web application created using PostgreSQL as the database foundation,
Ruby on Rails as the backend structure, and React.js coupled with Redux to
really polish off the frontend architecture.

## Features && Implementation

### Profile

The profile page is one of the centers of interaction for the user
and it was important to make this page as seamless and intuitive for the user as possible.
On the database side, User profile information is split into 2 tables. `details`
and `profiles`. `details` contains all the relatively static information about the user,
that can also be used as a filter. `profiles` contains all the information a user writes
about themselves. When a user first creates an account, both tables are automatically created
for them and details is populated with the initial basic factual information like birth date
and location.

On the Profile page a multipurpose form allows for modification of details, and profile image.
This was implemented using ReactForm to abstract away some of the details of a connected component
inside a default ReactModal. The content written by the user can be modified "inline" using
conditional logic in the `about` component to render a textarea on click of the edit button.

### Questions

Questions were implemented using three tables, `questions`, `answers`, and `question_answers`,
which was a join table between `users` and `answers`. `question_answers` had `id`, `user_id`,
`answer_id` columns all indexed as well as an Active Record association to questions through answers.
In the frontend redux state, question answers were stored by user id, and answers were listed under
their corresponding question, with a last slice for unanswered questions. This configuration allowed
for simple lookup based on the way each of these slices would be displayed on the page.
Unanswered questions, were rendered using a component specific to the job that saves
requests to the server by only asking for unanswered questions when the cache is empty.

## Future Directions for the Project

In addition to the above features, I plan to implement the following features to really
help GameOfHearts become the monarch of dating sites.

### Search

Searching users by various criteria is an important part of OKCupid and
I plan to implement this functionality for GOHearts.

### Ravens(Messaging)

The ability to reach out to other users is important for any dating site
and this will definitely be included in future versions of this application.

### Match Algorithim

The match algorithim for GOHearts is a bit archaic at the moment,
as it relies on the visions of seers and as such can be a bit prone to clustering.
Improving this by implementing an importance option on questions is a quality of
life improvement I plan to include.
