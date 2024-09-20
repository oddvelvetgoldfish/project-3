# Project 2: React Todo App

## Name: Sara Gharagozlou

## Overview

This project is a React-based Todo List application that allows users to manage their tasks efficiently. The app provides a user-friendly interface to add, view, filter, and remove todo items. Additionally, it includes a contact form where users can input their contact information and comments.

## Details:

- Navigation: Use the top horizontal navigation bar to switch between the Todos and Contact pages.

### Todos Page (/todos)

- Add New Todo: Use the form on the right side to add a new todo item by entering the task description and clicking the Add Todo button.
- View Todos: The list of todo items is displayed on the left side. Each item shows the task text.
- Mark as Completed: Click on a todo item to toggle its completion status. Completed tasks are visually indicated with a strikethrough effect.
- Remove Todo: Click the Delete button next to a todo item to remove it from the list.
- Filter Todos: Use the filter buttons above the todo list to view All, Completed, or Incomplete tasks.

### Contact Page (/contact)

- Contact Form: Fill out the form with your First Name, Last Name, Email, and Comments.
- Controlled Components: The form uses controlled components, so any input you enter updates the form's internal state.
- Submit Form: Click the Submit button to submit your contact information. Currently just outputs to console.log and clears the form.

## Technologies Used

- HTML
- CSS
- TypeScript
- React
- Vite
- TailwindCSS
- pnpm

## Ideas for future improvement

- Persistent Storage: Implement local storage or integrate a backend to save todos between sessions.
- User Authentication: Allow users to create accounts and save their todo lists securely.
- Enhanced Contact Form: Add form validation and integrate an API to handle form submissions.
- Responsive Design: Improve the layout to be fully responsive on all device sizes.
- Additional Features: Implement editing of existing todos and setting due dates or priorities.
