#  REST APIs 

![]()

It consists of the below 3 functionalities:
User: CRUD operation for the user management.
This provides the useful information about the system.

WeatherInfo: Gets the information from the external Weather API
based on the latitude and longitude.

Auth: contains the configuration for registering and 
logging users in, signing and verifying tokens.

It consist of a User model and controller. The model
defines the data, and the controller will contain all 
the business logic needed to interact with the database. 

It has a db file which will be used to
connect the app to the database, and an app file used
for bootstrapping the application itself.

The server file is used to spin up the server and tells the
app to listen on a specific port.

brew services start mongodb-community@4.4
brew services stop mongodb-community@4.4