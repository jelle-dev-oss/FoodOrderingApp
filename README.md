# QuickBite

QuickBite is a simple food ordering application developed using
React Native, Expo, TypeScript, and Expo Router. The application
allows users to browse food items, view food details, manage
quantities, add items to a cart, and complete an order.

The application also demonstrates the use of a simple REST API
using JSON Server. Food menu data is stored in `db.json` and
retrieved by the application using `fetch()` inside the
`useEffect` hook.

## Features

- Food menu retrieved from a REST API
- Food details
- Quantity counter
- Add to cart
- Cart summary
- Checkout
- Customer input
- Order confirmation
- Navigation using Expo Router
- Passing data between screens
- API data retrieval using `fetch()`
- JSON data handling
- Loading state while retrieving food data
- Error handling for API requests

## Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- JavaScript
- JSON Server
- REST API
- JSON

## API

QuickBite uses a simple local REST API powered by JSON Server.

The food data is stored in:

api/db.json

Example API endpoint:

http://localhost:3000/foods

The application retrieves the food menu using `fetch()` inside
the `useEffect` hook.

The basic data flow is:

useEffect()
↓
fetch()
↓
REST API
↓
JSON response
↓
setFoods()
↓
Food Menu

## How to Run

### 1. Install Node.js

Make sure Node.js is installed on your computer.

### 2. Install project dependencies

Open the project folder in the terminal and run:

npm install

### 3. Start the JSON Server

Open a separate terminal and run:

cd api

npx json-server db.json --port 3000

The food API will be available at:

http://localhost:3000/foods

Keep the JSON Server running while using the application.

### 4. Start the Expo application

Open another terminal in the main QuickBite project folder and run:

npx expo start

### 5. Run the application

Scan the QR code using Expo Go or run the application using
an available emulator.

## Project Structure

QuickBite/
├── api/
│   └── db.json
│
├── src/
│   └── app/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── details.tsx
│       ├── cart.tsx
│       ├── checkout.tsx
│       └── success.tsx
│
├── assets/
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md

## Application Flow

Home
↓
Food Menu
↓
Food Details
↓
Cart
↓
Checkout
↓
Order Success

## Data Flow

The food menu is retrieved from the local REST API.

db.json
↓
JSON Server
↓
/foods API endpoint
↓
fetch()
↓
useEffect()
↓
Food data stored in state
↓
Food menu displayed in index.tsx

## Main Screen Responsibilities

### index.tsx

Displays the food menu and retrieves food data from the REST API.
The screen uses `useEffect()` to perform the API request after
the component renders.

### details.tsx

Displays the selected food item and allows the user to choose
the quantity before adding the item to the cart.

### cart.tsx

Displays the selected food items, quantities, and order total.

### checkout.tsx

Collects customer information and allows the user to place the
order.

### success.tsx

Displays the order confirmation after the checkout process.

### _layout.tsx

Defines the application's navigation stack using Expo Router.

## Learning Concepts Demonstrated

QuickBite demonstrates the following concepts:

- React Native components
- User input
- Interactive state
- `useState`
- `useEffect`
- REST API
- JSON data
- `fetch()`
- Expo Router navigation
- Passing data between screens
- Query parameters
- Conditional rendering
- List rendering