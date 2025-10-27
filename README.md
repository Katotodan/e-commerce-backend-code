# E-Commerce Backend

Node / Express backend for the e-commerce project. Provides product management and authentication endpoints and uses MongoDB (via Mongoose) for persistence.

## Features
- REST endpoints for products and authentication
- MongoDB (Mongoose)
- JWT-based authentication
- CORS configured to allow the frontend (uses FRONTEND_URL)

## Prerequisites
- Node.js (v16+ recommended)
- npm
- A MongoDB instance (local or Atlas)

## Quick start (development)
1. Clone the this repo 

2. Open a terminal and change into the backend folder:

	cd e-commerce-backend-code

3. Install dependencies:

	npm install

4. Create a `.env` file in the `e-commerce-backend-code` folder and set the following variables (example):

	MONGO_URI=mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/mydb
	SECRET_KEY=your_jwt_secret_here 
	FRONTEND_URL=http://localhost:3000
	PORT=8080

5. Start the server:

	npm start

By default the server listens on the port configured by `PORT` (defaults to 5000).

## Main endpoints
The router is mounted at the application root. The important routes provided by this backend are:

- GET  /wake-up — simple health check
- GET  /getallproducts — return all products
- GET  /getproduct — product query endpoint
- GET  /getproduct/:id — get a single product by id
- POST /addproduct — add a product
- PUT  /updateproduct/:id — update a product by id
- DELETE /deleteproduct/:id — delete a product by id

- POST /signup — create a new user
- POST /login — authenticate an existing user
- POST /logout — logout
- GET  /user — get user info (requires auth)

Refer to `Routes/route.js` and the `Controller/` folder for implementation details.

## Environment variables
- MONGO_URI — MongoDB connection string
- SECRET_KEY — secret used to sign JWT tokens
- FRONTEND_URL — allowed origin for CORS
- PORT — server port

## Troubleshooting
- CORS errors: ensure `FRONTEND_URL` matches the actual URL where the client runs.
- MongoDB connection errors: verify your `MONGO_URI` and network/atlas IP whitelist.
- If `npm start` fails, run `node server.js` directly to see the raw error.

## Author
APIPAWE KATOTO Daniel

## License
MIT