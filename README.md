# Vamp Assignment

Written by James Dang

## How to run

To start the server, run 'npm run dev' at the root directory. You can then access the API's endpoint with URL: http://localhost:8000/campaigns/{teamId}

## Solution Approach

The API is built using TypeScript, ExpressJS and Firebase. 

It also uses a MSC (Model-Service-Controller) approach which is similar to the MVC (Model-View-Controller) framework. However, the API sends back JSON and not a HTML file, so it does not send back any views.

I used the MSC approach because it provides a better "separation of concerns". As a result, the code becomes more scalable and easier to maintain over time.


## Notes

I personally would not have the .env file in the repository with production keys. A better practice would be to have it stored within the CI/CD pipeline.

However, I wanted this code to be easily run by the team, so I left it there for a quicker start :D

