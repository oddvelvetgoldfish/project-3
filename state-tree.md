# Global State (Managed in TodosPage Component)

- todos: Todo[]
  - An array of todo items.
  - Each todo has:
    - id: number
    - text: string
    - completed: boolean
- filter: 'all' | 'completed' | 'incomplete'
  - Represents the current filter applied to the todo list.

# Local State (Managed within Components)

- TodoForm Component:

  - text: string
    - Holds the current value of the new todo input field.

- ContactForm Component:
  - formData: ContactFormData
    - firstName: string
    - lastName: string
    - email: string
    - comments: string
  - Each input field in the contact form updates the corresponding property in formData.
