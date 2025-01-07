# Intermittent Missing Route Parameters in React Router v6

This repository demonstrates a bug in React Router DOM v6 where route parameters are sometimes missing when navigating directly to a route with parameters.  The issue is intermittent and appears to be related to timing or component lifecycle issues, only appearing after navigating through certain other parts of the application.

## Bug Description

The `User` component, which expects a `userId` parameter, sometimes receives an undefined `userId` even when the route is correctly structured. This happens inconsistently, only after specific navigation paths or after interacting with the app for a while.  The issue is not consistent and is hard to reliably reproduce consistently.  

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Navigate through different links and routes to see if the error appears.  There is no guaranteed way to reproduce this error.

## Solution

The proposed solution involves careful route organization, using a parent component to manage routing or navigation.   See the `bugSolution.js` file for an example.