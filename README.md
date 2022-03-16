*Wiktor Jóźwik &copy; 2022 Time reporting system - version in NodeJS*

The project was created during my 5th semester of CS at Warsaw University of Technology
## Tech stack:
- NodeJS(Express)
- ReactJS
- PostgreSQL

## How to run?
`cd trs`

`docker-compose up`

`sudo chmod +x build-front-for-production.sh`

`./build-front-for-production.sh`

Backend in this case serves static files. The application works on one port *localhost:8000*

It is a similar version of the application written in .NET without a few functionalities.

Have in mind that there is no real authentication in the project. You can select users from a list. Data for users and activities are inserted from seed.
