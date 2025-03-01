# Basic - Task Management App (Frontend)

Basic is a task management application designed to enhance daily operations in retail and warehouse environments. The frontend is built using React.js and MUI to provide a smooth and responsive user experience.

## Tech Stack

- **React.js** – For building the UI
- **MUI** – For styling and component design
- **Emotion** – For CSS-in-JS styling
- **Axios** – For API requests
- **Formik & Joi** – For form handling and validation
- **React Router** – For client-side routing
- **JWT Decode** – For handling authentication tokens
- **React Toastify** – For notifications
- **React Confirm Alert** – For confirmation dialogs

## Features

### Signing Up

- While creating a user, you can also upload a picture beforehand (not required).
- By default, all newly created users do not have any roles such as **Shift Leader** or **Shopkeeper**.

### User Profile

- View personal info.
- Edit personal info and update profile picture.

### Tasks Area

- Filter tasks by **My Tasks**, **Unassigned Tasks**, or **All Tasks**.
- Grid/List view for better organization.
- Search input for quick task lookup.
- Each task is clickable and navigates to the **task details page**.

### Task Page

- View task description and remarks.
- Add and view remarks for collaboration.
- Mark tasks as completed.
- **Shopkeepers** can delete tasks (button is only visible to Shopkeepers).

### Task Management

- Create, assign, and track tasks with priority levels: **Low, Medium, and High**.
- Only **Shopkeepers** can delete tasks.

### Task Categories

- Organize tasks into predefined categories: **Recovery, Cleaning, Printing, Assembly**.

### Remarks & Collaboration

- Team members can leave **comments** on tasks for better communication.

## User Roles

### Co-Worker

- Views assigned tasks.
- Can assign tasks to themselves.

### Shift Leader

- Creates and assigns tasks to themselves or other team members, allowing access to the **Create Task** page.

### Shopkeeper

- Oversees task management.
- Can modify a user's **Shift Leader** status.
- Can delete tasks.
- Manages users via a **dashboard** accessible through the **`/sk-area`** page.

### Protected Routes

- Certain pages are restricted based on user roles:
  - A **Co-Worker** cannot access the **`/create-task`** page unless their **Shift Leader** status is enabled.
  - Only **Shopkeepers** can access the **`/sk-area`** page.

## Setup Instructions

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nonobromo/front.git
   cd front
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```
