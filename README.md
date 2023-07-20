# Weather App

> This is the weather app to display the weather information of the city input by the user.

> Check out the live demo if the webapp [_here_](https://weather-app-r215.vercel.app/).

## Table of Contents

- [Tech Stack](#tech-stack)
- [Assumptions](#assumption)
- [Features](#features)
- [Setup](#setup)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)
<!-- * [License](#license) -->

## Tech Stack

The tech stack used are 
1. ReactJS for the front framework
2. CSS modules for styling
3. Local Storage for some simple storage

## Assumption

There were some asumptions made for this exercise.

1. Task shows City and Country input fields. However in the mock, only country field was present. Looking at openweather API documents, only one input variable is need for the API call and the city input field seems to be more accurate. Because of that, I have decide to go with city input field.
2. As there was no explicit instructions in styling preferences, I decided to go with CSS modules. (See room for improvement for better suggestion)
3. As there was no explicit instructions in storage preference, local storage was used for this exercise.
4. Fetch API was used together with NextJS API routing folder in this project to retrieve information from the API. (See room for improvement for reason behind this)
5. Only the nine latest search entries will be shown in the application as it was not explicitly mentioned how many should be shown.

## Features

List of features here:

- Retrieve weather information from OpenWeatherMap API
- Display weather information in frontend
- Able to delete entries of search history
- Able to do a quick search base on specific search history entries
- Webapp is responsive to different screen sizes

## Setup

Project dependencies are list in package.json file. To see and review the code, npm install, npm run dev and run webapp in localhost:3000.

## Room for Improvement

Due to time constraints, there are a few feature I would have liked to implement but could not.

- Use Redux for global state management. Could be used to handle information flow into local storagen such as saving/deleting/retriving information from local storage. Could use that to prevent prop drilling. There was one isntance when I had to drill my props 3 levels up which was tendious.
- Using Tailwind CSS to improve styling efficiency. I do not have much experience in tailwind and would have love to use this opportunity to practice on it if not for the time constraint. CSS module is very basic but it keep my styling organised towards each component.
- Better understand the core concept of typescript to improve proficiency in the app. Application of typescript was intermediate at best. Would have preferred to implement more typeguards and build interface to typecheck different variables for better developer experience.
- Would have explored using tRPC to ensure type safety when consuming API endpoints from openweathermap. Would have greatly ease development experience.
- Improvement design best practices. I do not have much exposure in this and would have loved to read up more about it to apply on this project.
- The Geolocation for the API calls are not very accurate. In some cities, it could not geolocate accurately. I suspect this is due tobecause some city having multiple search results or the way I sort the API response is not optimal.
- I understand AJAX was requested to be used to get weather information from the API. However I have not used it before and looking through the documentations, my intuition tells me I may take more time to get up to speed and risk not completing the assignment. So I made the decision to use fetchAPI instead to be able to complete the assignment.

## Contact

Created by [@jarethtan]( https://github.com/jarethtan - feel free to contact me via my email as well (Jareth.tan@outlook.com)
