# RHnet - Employee Management App

A React application for managing employee records with features including adding, viewing, searching, sorting, and paginating employee data. Built with React, Redux Toolkit, TypeScript, and Ant Design.

## Features

- Add new employees with detailed information including personal data and address.

- View current employees in a sortable, searchable, and paginated table.

- Filter employees by any field using a global search.

- Pagination with customizable page size (10, 20, 50, 100).

- Responsive and accessible UI components.

- Confirmation modal on successful employee creation.


## Tech Stack

- React with functional components and hooks

- Redux Toolkit for state management

- TypeScript for static typing

- Ant Design for UI components (Table, DatePicker, Modal)

- **`select_component_react_plugin` (^1.0.0)**: For standardized select components. Available here: (https://github.com/dcseguramedina/select_component_react_plugin.git)

- Custom reusable components (Header, Input, Button, Navigation)

- CSS Modules for scoped styling
  

## Getting Started

### Prerequisites

 - Node.js

 - npm or yarn

### Installation
 - Clone the repository:

```bash
git clone https://github.com/dcseguramedina/RHnet-app-react.git
cd RHnet-app-react
```

 - Install dependencies:

```bash
npm install
# or
yarn install
```

- Start the development server:

```bash
npm run dev
# or
yarn run dev
```

### Available Scripts

```bash
npm run dev / yarn run dev
Runs the app in development mode.

npm run build / yarn build
Builds the app for production.

npm run lint / yarn lint
Runs linting checks.
```

## Project Structure

```text
src/
├── components/               # Reusable UI components (Button, Header, Input, Navigation)
├── data/                     # Static data like states and departments
├── features/
│   ├── createEmployee/       # Redux slice, actions, and createEmployee component
│   └── viewCurrentEmployees/ # viewCurrentEmployees component    
├── routes/                   # App routes
├── store/                    # Redux store setup and types
├── App.tsx                   # Main app component
├── main.css                  # Global CSS file
└── main.tsx                  # Entry point
```
