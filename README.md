# QuickBite

QuickBite is a simple food ordering application developed using React Native, Expo, TypeScript, and Expo Router. The application allows users to browse food items, view food details, manage quantities, add items to a cart, and complete an order.

## Features

- Food menu
- Food details
- Quantity counter
- Add to cart
- Cart summary
- Checkout
- Customer input
- Order confirmation
- Navigation using Expo Router
- Passing data between screens
- Loading state
- Error handling

## Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- JavaScript
- JSON

## How to Run

### 1. Install Node.js

Make sure Node.js is installed on your computer.

### 2. Install Project Dependencies

Open the project folder in the terminal and run:

```bash
npm install
```

### 3. Start the Expo Application

In the main QuickBite project folder, run:

```bash
npx expo start
```

### 4. Run the Application

Scan the QR code using Expo Go or run the application using an available emulator.

## Project Structure

```text
QuickBite/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── details.tsx
│   ├── cart.tsx
│   ├── checkout.tsx
│   └── success.tsx
│
├── assets/
├── package.json
├── tsconfig.json
└── README.md
```

## Application Flow

Home / Food Menu  
↓  
Food Details  
↓  
Cart  
↓  
Checkout  
↓  
Order Success

## Main Screen Responsibilities

### index.tsx

Displays the food menu and allows users to select a food item.

### details.tsx

Displays the selected food item and allows the user to choose the quantity before adding the item to the cart.

### cart.tsx

Displays the selected food items, quantities, and order total.

### checkout.tsx

Collects customer information and allows the user to place the order.

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
- Expo Router navigation
- Passing data between screens
- Query parameters
- Conditional rendering
- List rendering