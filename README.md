# Warehouse Management System

Clone the repository: To clone the repository run below command in the terminal

```bash 
git clone https://github.com/mohdarshad86/stockarea.git
```

For the detailed explanation to setup both the frontend and backend in your local environment, please refer to the sections below.

# BACKEND:

The server directory is the backend for a Warehouse Management App, providing RESTful APIs for adding new Warehouse, fetching and updating deatils. It is built using the Express.js framework and follows MVC Model,  best practices for routing and middleware usage.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Middleware](#middlewares)

## Features
- Adding new Warehouse
- Getting all the Warehouse
- Updating/Editing the details of a particular Warehouse.

## Getting Started
To run this backend as seperate on your local development environment, follow these steps:

1. You have already cloned the repository now navigate to the ```server``` directory using the command.
```bash 
cd server
``` 

2. Install dependencies:
```bash
npm install
```
It will install all the necessary dependencies

3. Configure environment variables by creating a .env file and adding the required configuration i.e. ```PORT & MONGO_URI```

4. Start the server: run command
```bash
npm start
```
The server will be running on http://localhost:3001 by default.

## API Endpoints
The backend server provides the following API endpoints:

### Warehouse Management

- POST /api/warehouse: Register a new warehouse.
- GET /api/warehouse: Get the list of all warehouses .
- POST /api/warehouse/:id: Update warehouse details.


## Usage
This backend serves to build a frontend application that allows users to add, fetch and update Warehouse.

