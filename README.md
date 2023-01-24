## Hilton Dev Assessment

For this code assessment, we expect you to make the changes listed in the `Deliverables` sections and then email us the link to your codesandbox instance that has your changes. (As soon as you make a change and save it, it will fork this project and create a unique url for you).

## Setup

You need to sign up for an OpenWeather API key. Instructions are here: https://openweathermap.org/appid

After you get your API, add that as API_KEY in city-weather.tsx

## Mock bug report

Steps to reproduce:

1. Type a valid US city in the "Weather Search" box
1. Press {enter}

Expected results
User should see the current weather results for that city

Actual Results:
App crashes

## Deliverable 1:

1. Fix the bug
   - Treating this like a bug ticket, identify the bug in the application and provide a fix.
2. Talk about your changes
   - Write a short description about what was the underlying cause of the bug and how you fixed it

## Deliverable 2:

1. Create a city-weather-refactor.tsx file, in which you refactor the city-weather component to use react hooks rather than React.Component. Incorporate the following:

   1. Match the design
      - A designer has provided a comp on how this app should look (see design.png)
        - To match the design you may need to use different fields that are retuned from teh openweathermap API. For example, the weather condition three digit code can be [mapped to the icons here](https://openweathermap.org/weather-conditions)
      - Tailwindcss is installed and configured for you
   2. Improve web accessibility
      - Ensure that clicking on the label "Weather Search" puts focus into the text-input.
      - Make sure any loading states are correctly announced to a screen reader
   3. Make the tests better
      - There was a test written for this feature but it clearly didn't catch the bug, make the test better (you can open a new terminal in the bottom right of code sandbox and `yarn test`)

2. Talk about your changes
   - For the refactor and other accompanying tasks, include any other thoughts, assumptions, or known compromises in how you approached the work.

## Assessment Notes:

1. The bug was fairly easy to spot, it's a common problem with React trying to render a value that is undefined. It will break the front-end and as developers, we need to make sure variables always have values and how to handle them in case there is no value.

2. My solution was to initially destructure the values from state and add a fallback empty object. I also used optional chaining to make sure we are checking for values before moving down in the object chain.

3. I enjoy working with NextJS and Tailwind, it fast and easy to keep consistency between components and code organization.

4. I would personally remove the fetchData from the useEffect. I have been using React Query to make api calls and a nice feature that they have is to make a new call when the user switch tabs (if the user leaves and returns) so that the temperature would update. Also improves efficiency with network calls and cache.

5. I added a loading state when searching for the weather in a specific city and error handling in case the user search for a city that doesn't have any data or throws an error.

6. This is an area that I need to work on personally, I haven't been writing unit and integration tests lately and am quite rusty. I did write some basic tests for files making sure components were being rendered but felt like they were a bad way to show work and decided to remove them.
