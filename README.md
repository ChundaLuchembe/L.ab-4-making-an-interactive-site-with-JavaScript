# SPL Online Services - Lab 4

## NAME
- **Chunda Luchembe 2021379981**

## Page Descriptions
### 1. **Home Page (index.html)**
The home page is the primary landing page of SPL Online Services. It features a **theme toggle** button that allows users to switch between light and dark modes for a better user experience. The page also includes a hero section with an engaging banner, a brief introduction to the website, and a **dynamic FAQ section** where users can click on questions to reveal or hide answers.

### 2. **Contact Page (contact.html)**
The contact page enables users to send messages to SPL Online Services. It includes a **contact form** with fields for name, email, subject, and message. The form incorporates JavaScript validation to prevent empty submissions. Additionally, after scrolling down, a **Back to Top** button becomes visible, allowing users to easily return to the top of the page. When the form is submitted, a custom greeting message appears confirming the successful submission.

### 3. **Team Page (optional in index.html)**
This page uses a **Fetch API** to display a list of user names dynamically. Users can click the "Load Users" button to fetch and display names from an external API (JSONPlaceholder). The list of names is shown below the button and updates asynchronously, enhancing the page's interactivity.

## Summary of Features Used
### 1. **CSS Selectors**
- Utilized various CSS selectors such as class selectors (`.className`), ID selectors (`#idName`), and element selectors (`div`, `h1`, `p`) to style and arrange content across pages.

### 2. **JavaScript**
- **Event Listeners**: Used event listeners for user interaction such as the theme toggle button, the FAQ section, and the "Back to Top" button.
- **Form Validation**: Implemented JavaScript to prevent form submissions if any fields are empty and to display a custom greeting on successful submission.
- **Fetch API**: Integrated the Fetch API to load and display user data dynamically on the home page.

### 3. **Flexbox**
- Applied **Flexbox** to create flexible and responsive layouts on various sections of the website, including the navigation bar and the FAQ container.

### 4. **CSS Grid**
- Used **CSS Grid** to build a responsive layout for the service cards on the services page, where cards adjust dynamically based on the screen size.

### 5. **Responsive Design**
- Designed all pages with **responsive techniques** to ensure the website is functional and looks great on all screen sizes, from desktop to mobile devices.

### 6. **Interactive Features**
- **Theme Toggle**: Added a button that lets users toggle between light and dark mode, enhancing accessibility and user experience.
- **Interactive FAQ**: Created a collapsible FAQ section where clicking on a question reveals or hides the corresponding answer.
- **Fetch API Integration**: Integrated an API to fetch a list of users and display their names dynamically, providing real-time interaction with external data.
- **Back to Top Button**: Implemented a button that appears when scrolling down, allowing users to easily scroll back to the top of the page.

