
# SuperGaming Frontend Assignment

Assignment solution for the position of Frontend Developer at SuperGaming

View the live website here: [https://supergaming-frontend-assignment.netlify.app/](https://supergaming-frontend-assignment.netlify.app/)

## Features

- Uses ReactJS, React Hooks, React Context,React Redux, CSS, and Javascript
- Uses [Vite](https://vitejs.dev/) instead of CRA for better performance.
- Uses [Fomantic UI](https://fomantic-ui.com/) component library
- Fully Responsive Design
- Reusable Components

## API Reference

#### Supergaming Indus Test API

API provided by SuperGaming.

Docs Link: [Supergaming Indus Test API](https://test.indusgame.com)

```http
  POST /logins
```

The `POST /logins` endpoint takes "username" and "password" in the request body

```http
  POST /auths
```

This endpoint will allow the frontend to renew the `accessToken` without having to save the username/password pair as it can save the `refreshToken` and let the user remain authenticated to the backend using the `refreshToken` instead.

The `POST /auths` endpoint takes "refreshToken" in the request body

```http
  AUTH POST /logouts
```

The `AUTH POST /logouts` endpoint takes no request body. Simply provide the combination of `<tokenType> <accessToken>` as the value of the Authorization header.

```http
  AUTH GET /units
```

To list all the available units, call the `GET /units` endpoint with the relevant `Authorization` header. The response is a list of unit data.

```http
  AUTH PATCH /units/{unitId}
```

Simply provide the combination of `<tokenType> <accessToken>` as the value of the Authorization header.

## Usage

- Opening the application redirects to the 'Login' page if the user is not logged in.
- If the user is logged in, or once the user logs in, the page redirects to 'Home' page.
- The 'Home' page displays the units in the form of cards with some (not all) details about the unit.
- To view all details of the unit, click on the 'See More' button.
- The 'See More' button redirects to the unit details page where all information about the unit is provided.
- If you want to edit any stats of a unit, a button labelled 'Edit Unit' is present on each unit card of the 'Home' page.
- Clicking on 'Edit Unit' button opens a modal which allows the user to edit only the editable stats of a unit.
- Clicking on submit will update the respective detail. Click on 'See More' button to verify.
- The 'Logout' button in the header allows the user to log out of the application and provides a redirect to 'Login' page.

PS: Only Part I and Part II of the assignment which are mandatory have been implemented. Part III and Part IV are work in progress.

PS: [react-toastify](https://fkhadra.github.io/react-toastify/introduction) is used to display toast messages like success and error instead of toast from fomantic-ui library because the toast in fomantic-ui requires jQuery and using jQuery in React is an antipattern. Read More about it [here](https://stackoverflow.com/questions/51304288/what-is-the-right-way-to-use-jquery-in-react/51304632#51304632).

PS: Loader has been sourced from [CSS Loaders](https://cssloaders.github.io/).

## Run Locally

Clone the project

```bash
  git clone https://github.com/RakshaPawar108/supergaming-frontend-assignment.git
```

Go to the project directory

```bash
  cd supergaming-frontend-assignment
```

Install dependencies

```bash
  npm install
  
  OR

  yarn install
```

Start the development server

```bash
  npm run dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.

## About the Developer

- GitHub: [@RakshaPawar108](https://github.com/RakshaPawar108)
- Twitter: [@rakshapawar108](https://twitter.com/rakshapawar108)
- LinkedIn: [https://www.linkedin.com/in/rakshapawar/](https://www.linkedin.com/in/rakshapawar/)
- Peerlist: [https://peerlist.io/rakshapawar](https://peerlist.io/rakshapawar)
