Advanced Routing in React with React Router
Objective

Implement advanced routing techniques in a React application using React Router.
This includes:

Nested routes

Dynamic routes

Protected routes requiring authentication

Project Setup
1Create the Project
npm create vite@latest react-router-advanced -- --template react
cd react-router-advanced
npm install react-router-dom
npm run dev


Routing Implementation
1. Main Router (App.jsx)

Defines all routes using react-router-dom.
Includes links for navigation and sets up:

Home route (/)

Login route (/login)

Protected profile route (/profile/*)

Dynamic blog route (/blog/:postId)

2. Nested Routes

Inside Profile.jsx, define sub-routes for:

/profile/details

/profile/settings

Each sub-page (ProfileDetails, ProfileSettings) renders independently within the parent component.

3. Dynamic Routes

/blog/:postId uses the useParams() hook to render variable content for each post.

4. Protected Routes

ProtectedRoute.jsx restricts access to /profile unless the user is authenticated.
A mock authentication check uses localStorage:

localStorage.setItem("isLoggedIn", "true");

Authentication Flow

Unauthenticated users visiting /profile are redirected to /login.

On the login page, clicking the Login button sets:

localStorage.setItem("isLoggedIn", "true");


After login, the user is redirected back to /profile.

Testing Instructions
1. Run the app
npm run dev

2. Test Each Route
Route	Expected Behavior
/	Displays Home page
/login	Displays Login page
/profile (not logged in)	Redirects to Login
/profile (after login)	Displays Profile page
/profile/details	Shows Profile Details
/profile/settings	Shows Profile Settings
/blog/1	Displays Blog Post #1
/blog/5	Displays Blog Post #5

Key Features

Nested Routes: Organized sub-pages within a main component

Dynamic Routing: Flexible URL handling for user-generated content

Protected Routes: Basic authentication system simulation

Navigation: Seamless transition using React Router links

Technologies Used

React (Vite)

React Router DOM v6+

JavaScript (ES6+)

CSS (basic styling)

Conclusion

This project demonstrates how to manage:

Complex route hierarchies

Authentication and route protection

Dynamic data-driven URLs

These concepts are essential for building scalable, secure, and user-friendly React applications.