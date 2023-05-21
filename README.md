
# Vamp Assignment

Written by James Dang

## How to run

To start the server, run 'npm run dev' at the root directory. 

There are two API endpoints.

http://localhost:8000/campaigns/{team_id} retrieves campaigns via team_id. For example, http://localhost:8000/campaigns/3 retrieves all campaigns with team_id = 3.

http://localhost:8000/teams/{code} retrieves campaigns via a team's code. For example, http://localhost:8000/teams/adidios retrieves all campaigns with code = adidios.

## Solution Approach

The API is built using TypeScript, ExpressJS and Firebase. 

It also uses a MSC (Model-Service-Controller) approach which is similar to the MVC (Model-View-Controller) framework. However, the API sends back JSON and not a HTML file, so it does not send back any views.

I used the MSC approach because it provides a better "separation of concerns". As a result, the code becomes more scalable and easier to maintain over time.


## Notes

I personally would not have the .env file in the repository with production keys. A better practice would be to have it stored within the CI/CD pipeline. However, I wanted this code to be easily run by the team, so I left it there for a quicker start.

The database is initalised by converting the Excel sheets into JSON. The database is then populated by the JSON objects from the *initaliseDatabase.ts* file in the *utils/* folder. I also wouldn't push the files in the utils folder the repository, as it has database write queries. In the case of accidental write queries, I have disabled the setting in Firebase as a preventative measure.

