Flipkart Clone Project - MERN Stack
This is a Flipkart clone project developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
The project consists of two main folders: ```client``` and ```server```, representing the front-end and back-end components respectively. 
Redux is used for state management, and Material-UI is utilized for building the user interface. The project is hosted on Netlify for the client-side and on another platform (e.g., Heroku) for the server-side.

```
Project Structure
  flipkart-clone/
    ├── client/
    |    ├── public/
    |    ├── src/
    |    |    ├── actions/            # Redux actions
    |    |    ├── components/         # Reusable React components
    |    |    ├── reducers/           # Redux reducers
    |    |    ├── App.js              # Main App component
    |    |    ├── index.js            # Entry point of the React app
    |    |    └── ...
    |    ├── package.json
    |    ├── package-lock.json
    |    └── ...
    └── server/
        ├── controllers/             # Express.js controllers
        ├── models/                  # MongoDB models
        ├── routes/                  # Express.js routes
        ├── index.js                 # Entry point of the server
        └── ...

```
  Getting Started
	
Prerequisites
```
Node.js (version >= 12)
npm (Node Package Manager)
```
Installation

Clone the repository:
```
  git clone https://github.com/your-username/flipkart-clone.git
  cd flipkart-clone
```

  Install dependencies for both the client and server:
```
  cd client
  npm install
cd ../server
npm install
```

Development

Start the development server for the client (front-end):
```
  cd client
  npm start
  ```
The client will run on http://localhost:3000.


Start the development server for the server (back-end):
```
  cd server
  npm start
 ``` 
The server will run on http://localhost:5000.

Deployment

The project has been deployed using Netlify for the client-side and another hosting platform (e.g., Heroku) for the server-side.
To deploy the client on Netlify, you can follow the steps mentioned in the Netlify documentation. 
Similarly, to deploy the server on another hosting platform, you need to set up the appropriate hosting service (e.g., Heroku, AWS, etc.) 
and configure the deployment process according to the platform's guidelines.
