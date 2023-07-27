# Job Board (Backend)



## Installation

To set up the project locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install all the dependencies.
3. Create a `.env` with a key named MONGODB_URL with the value of your mongo database
4. Run `npm start` to start the development server. (Running on port 8000)

## Features

The job board frontend allows users to:

- View all job offers available on the platform.
- Search for job offers by position, company, or location.
- Create a new job offer.
- Edit or delete an existing job offer.

## Components

The frontend is divided into several reusable components:

1. Header: Displays the logo and the navigation menu.

2. JobCard: Displays a job offer with its details.

3. JobList: Displays a list of job offers.

4. JobSearch: Allows users to search for job offers by position, company, or location.

5. JobForm: Allows users to create or edit a job offer.

## API Interaction

The frontend interacts with the backend API through axios requests. The following endpoints are used:

- GET /offers: Retrieves all job offers.
- GET /search: Retrieves job offers that match the search query.
- GET /offers/:id: Retrieves a specific job offer by ID.
- POST /offers: Creates a new job offer.
- PUT /offers/:id: Updates an existing job offer by ID.
- DELETE /offers/:id: Deletes an existing job offer by ID.

## Styling

The frontend is styled using CSS, with some help from the Bootstrap library. The styling is responsive and optimized for mobile devices.

## Known Issues and Future Development

There are currently no known issues with the frontend, but some future plans for development include:

- Adding pagination to the job offer list.
- Improving the search algorithm to provide better results.
- Adding form validation to ensure that users enter valid data when creating or editing a job offer.
