# GameBlog

The front-end for a full-stack news blog application that allows users to create blog posts and share them with others.

**Link to project:** https://gameblog.vzmars.com/

**Back-End:** https://github.com/vzMars/gameblog-api

![alt text](https://i.imgur.com/kxlagcO.png)
![alt text](https://i.imgur.com/pCh3anV.png)

## How It's Made:

**Tech used:** TypeScript, React, Tailwind CSS

The front-end for this application was made using React and TypeScript. Tailwind CSS was used to style this application. This application is also mobile responsive and renders different components depending if the user is on a mobile or desktop device. React Router DOM was used to handle routing in this application. There are public routes that can be acessed by all such as the Home page. There are private routes that can only be accessed by users who aren't logged in such as the Login and Signup page and private routes where only authenticated users can access. I have also created a 404 Not Found page for routes that don't exist in the application. The Context API was used to manage the authentication state and manage the state of posts that users have created. I have also created custom hooks for using the AuthContext and PostContext, registering the user, logging in the user and logging the user out.

## Optimizations:

I would add pagination to the news feed so that the user is not endlessly scrolling down the page. I would also like to add a feature that allows users to comment on posts and instead of the tag system only having six options I would update it so that the user can create custom tags like other blogging sites.

## Lessons Learned:

I learned how to use TypeScript and React together and found it easy to get set up and deploy the application. The biggest issue I had was creating the AuthContext and PostContext and getting these two pieces of the application working with TypeScript and needed to add the necessary types for the context. For example, the AuthContext needed an AuthStateType for the initial state, an AuthContextType that was needed when creating the context, and an AuthReducerAction that was needed for the authReducer. I also needed to create a ChildrenType that was used in the AuthProvider and PostProvider.

## More Projects:

Take a look at these other projects that I have in my portfolio:

**Employee CRM:** https://github.com/vzMars/employee-crm

**ItemPickups:** https://github.com/vzMars/item-pickups

**MangaNotifications:** https://github.com/vzMars/manga-notifications
