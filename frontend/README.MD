
# MS Amlin Tasks

## Task Description
The candidate would need to build a full stack application. The frontend should be written in React and typescript and the backend in Express and TypeScript. The database of choice should be PostGresSQL and the queries should be written in vanilla SQL using the PG package (no fancy ORMs).

The application should have an authentication page and 2 protected pages.

Page 1) should have one input box where the user can create a task then there should be a column where all the tasks can be stored. The user will have the option drag and drop the tasks in whatever order they like inside the “column”. Finally when the components unmounts all the results and ORDER of the task on the column needs to be saved in the database. If a new session starts and the user navigates to that page the “tasks” from the database needs to be fetched and placed back in the column in the same order.

Page 2) can just have a h1 header. The only purpose of the second page is so the user can navigate between the 2 pages and the content of the Page1 should be stored on a global state (preferable either redux or Zustand) so once you navigate back to Page 1 , the content (i.e. the order of the tasks on that column is as it used to be before the user navigated away from that page)  **(Piotr's remark: I believe that saving the state on page change is redundant as this action will unmount the Tasks component anyway, so the task order will be saved, as the previous requirement states. I still implement that so it also saves it in the state. We can discuss that if you want.)**

NOTE : THE CSS is not important on this task you can have as basic/simple CSS as you would like.

Final request is to have 1 test written for both frontend and backend (any type of test you like)


## Task Clarification by Katie
1. **The application should have an authentication page and 2 protected pages." - can you elaborate more on this please ? What kind of authentication is required? Should each user be different and has its own password ?**
You can choose any method of authentication that you like (use the one that showcase your skills the best). Each user should have the option to sign up and login using their own password **(I choose to use one user here user: User, password:123. You can log in, and you can log out. Only when you are log in, you have access to tasks and other page. That can obvilusly be extended as we want. We can discuss that.)**

2. **Does the tasks created by logged in user should be saved for this user or somehow globally for any user that logs in ?**
Entirely up to you, both options are fine **(I save tasks globaly)**

3. **Are there any limits for tasks amount ?**
Not really

4. **Are there any limits for what the user can enter in the input box ?**
Not really

5. **Should the logged in user have the ability to log out ?**
For the sake of saving time , there is not need to implement a logout functionality  **(Log out implemented, as I believe without it, It would be difficult to showcase the access to protected pages.)**

6. **What information the task should store? Just a simple name and order? or also belonging to logged in user ?**
The information is completely irrelevant, it can be just a string. The important part is the re-ordering , saving/loading the tasks from/to the database. In terms of who the tasks should belong to is entirely up to you. Both options are fine

7. **Should the user be able to create account ?**
Yes **(There is no user account creation as I choose the default user approach.)**

8. **Storing the app state doesn't require Redux or Zustand, as for the application of this size I can easily use React Context API for it. I believe that would be a better design decision for this, or you require to use Redux ?**
You are right that the app is extremely small and simple and doesn’t really require Zustand or Redux. With that being said ,I would still like for you to use either of them to showcase how you would use any of those state management libraries **(Redux has been used, but totally unnecessary. We can discuss further)**

9. **"Final request is to have 1 test written for both frontend and backend (any type of test you like)". I guess this is just to have the test suite started, yes ? Do you have any preference on the test tool used ?**
I have no preference on the test tool neither on the test type. As you said si more about having the test suite stared. In terms of the test, feel free to write any test you like (again keep in mind write the test that you think will make more sense/impress the most)



**I believe that there is much more to be implemented for that piece of code to be production ready. Security, better user management, prevention from inputing wrong user data, styling and css. The application in current state fulfills all initial criteria provided.**

# Setup and testing


Postgresql should be running on port 5432
Configuration for postgresql in index.ts
```
  user: 'postgres',
  host: 'localhost',
  database: 'taskmanager',
  password: 'postgres',
  port: 5432,
```

**Query to initiate table for tasks.**
```
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0
);
```

**To run tests:**
1. For frontend: go to frontend directory and run
```
npm test
```
2. For backend: go to backend directory and run
```
npm test
```

**To run backend go to backend directory and run**
```
npx ts-node src/index.ts
```

Backend express server is running on port 5000


To run frontend go to frontend directory and run

```
npm start
```
Frontend is running on localhost:3000

If I forgot anything , please let me know.

-- **Piotr Lipski**

email: piotr.lipski.it@gmail.com
