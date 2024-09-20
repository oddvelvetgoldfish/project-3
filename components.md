# Container Components

These components manage state and contain logic. They pass data and callbacks to presentational components.

## App

- Sets up routing and renders the navigation bar and the appropriate page component based on the route.

## TodosPage

- Manages the list of todos and the filter state.
- Handles adding, updating, and deleting todos.
- Passes data and callbacks to TodoForm and TodoList.

## ContactPage

- Renders the ContactForm component.

# Presentational Components

These components focus on how things look. They receive data and callbacks via props.

## Navbar

Displays navigation links.
Uses React Router's NavLink for navigation.

## TodoForm

- A form for adding new todos.
- Uses local state for the input field (text).
- Calls addTodo callback prop on form submission.

## TodoList

- Displays a list of TodoItem components.
- Receives the filtered list of todos and action callbacks via props.

## TodoItem

- Displays a single todo item.
- Shows task text and completion status.
- Provides buttons or icons to toggle completion and delete the task.
- Calls toggleComplete and removeTodo callbacks via props.

## ContactForm

- Displays the contact form fields.
- Uses local state (formData) for controlled inputs.
- Handles form submission locally (could be extended to pass data up).
