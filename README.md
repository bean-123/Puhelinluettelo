# Puhelinluettelo (Phonebook) — Full Stack Open Part 2 (Forms)

This project is an implementation of the phonebook exercises (2.6 → 2.17) from the “Forms” section of the Full Stack Open course. The goal is to create a React-based phonebook app that evolves step by step: adding names, preventing duplicates, adding numbers, filtering, componentizing, and (in later parts) integrating with a server backend.

---

## Table of Contents

1. Features / Requirements
2. Project Setup
3. Implementation Steps & Exercise Breakdown
4. Architecture / Components
5. Usage
6. Future Extensions
7. License / Attribution

---

## Features / Requirements

Over the course of the exercises, the app should support:

- Displaying a list of persons (name + phone number).
- Adding a new person (name + number).
- Avoiding duplicate names — warning the user if name already exists.
- Filtering / searching persons by name (case-insensitive).
- Breaking down UI into components (e.g. Filter, PersonForm, Persons, Person).
- In later parts (beyond 2.10, up to 2.17), integration with a server (CRUD: fetch, add, delete, update) and error / success notifications.
- Clean state management (React hooks) and controlled input components.

---

## Project Setup

```
1. Clone / initialize project

   git clone <your-repo-url>
   cd <project-directory>

2. Install dependencies

   npm install

   # or

   yarn install

3. Run the development server

   npm start

   # or

   yarn start

   The app should open in your browser, typically at [localhost](http://localhost:3000).

4. Build for production

   npm run build

   # or

   yarn build
```

---

## Implementation Steps & Exercise Breakdown

Here’s a roadmap summarizing what each exercise (2.6 → 2.17) asks you to do, and tips / pitfalls.

| Exercise  | Goal / Task                                                         | Notes & Tips                                                                                                                                                       |
| --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.6       | Basic phonebook: add persons (name only)                            | Use useState for persons and newName, prevent page reload with event.preventDefault()                                                                              |
| 2.7       | Prevent duplicate names                                             | Before adding, check if name already exists in persons; if yes, alert(...)                                                                                         |
| 2.8       | Add phone numbers                                                   | Extend state to hold newNumber, add second input + change handler, store number in person object                                                                   |
| 2.9       | Filtering / search                                                  | Add a separate input (outside the form), and derive a filtered list (case-insensitive)                                                                             |
| 2.10      | Component refactor                                                  | Split into components: Filter, PersonForm, Persons (or Person)—keep state & handlers in App                                                                        |
| 2.11–2.17 | Backend integration, delete / update, notifications, error handling | Fetch existing data from server, POST new entries, DELETE, PUT updates (e.g. change number), show success/error messages, handle promise rejections, styling, etc. |

---

## Architecture / Components

Suggested component structure:

```text
App
 ├── Filter
 ├── PersonForm
 ├── Persons
 │ └── Person (optional)
 ├── Notification (for success / error messages)
```

- App: Holds central state (persons, newName, newNumber, filterText, notificationMessage/Type). Contains event handlers.
- Filter: Input component to filter list (props: filterText, onFilterChange).
- PersonForm: The form to add or update a person (props: input values, change handlers, submit handler).
- Persons: Renders list of (filtered) persons.
- Person: Optional sub-component for a single person with delete button.
- Notification: Displays success/error messages, styled with colors, auto-dismiss after timeout.

---

## Usage

- Viewing existing contacts: fetch contacts from backend (once implemented).
- Adding a contact: enter name and number, click “add”. If name exists already, a warning appears.
- Filtering contacts: type part of a name in filter field, list updates live.
- Deleting/updating: each contact may have a delete button. Adding a duplicate name with different number prompts update.
- Notifications: success/error messages show and vanish after a few seconds.

---

## Future Extensions

- Add form validation (e.g. phone number format).
- Use a UI library (Material UI, Bootstrap) for styling.
- Persist data in a real database (e.g. MongoDB, PostgreSQL) with a backend API.
- Add pagination or sorting.
- Add authentication / user accounts so each user has their own phonebook.

---

## License / Attribution

This project is based on the Full Stack Open course exercises (Forms section). Any original code you write is yours; this README is provided under a permissive license (feel free to adapt).
