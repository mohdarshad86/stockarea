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

# FRONTEND

The client directory is the frontend of the Warehouse Management App. This frontend application is built to interact with the corresponding backend server to provide users with a user-friendly interface for managing Warehouse.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- Get All Warehouses.
- Search Warehouse according to name
- Filter warehouse based on city, cluster and minimum available space.

## Getting Started

To get started with this frontend application, follow these steps:

1. Navigate to the fronened directory:

   ```bash
   cd client
2. Install necessary dependencies
   ```bash 
   npm install
3. Run Frontend
   ```bash 
   npm start
# Usage Guide

This guide provides instructions on how to use the frontend application to manage warehouse.

## Homepage

Contains All the available warehouses

## Search in warehouse

User can search for particular warehouses according to name provide in search input

## Filter

User can filter the results according to city, cluster and available space

## Add New Warehouse Button 
### Additional feature

By clicking on ```Add New Warehouse Button``` user will navigate to the warehouse form, whare user can add a new entry by providing all the necessary details.

## Details Page

From Homepage user can click any warehouse and it will navigate to the details page and there user can see all the details about the warehouse.

## Edit Warehouse Button

Clicking on ```Edit Warehouse Button``` user will navigate to the Edit Form, where user can update the details.

### Ensure that the corresponding backend server is also running to handle API requests.