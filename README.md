# Zodi-App✨

✨Live Link
https://zodi-app.herokuapp.com/

## So? What is Zodi-App?

Glad you asked! This isn't your run of the mill astrology app. Zodi-App allows users the ability to enter their birthdays calculate their sun signs and with that information get daily horoscopes that they can post and share with a community of other Zodi-App users, that you can potentially add as friends! Zodi-App allows users to keep track of past calculations as well as calculate compatibilities through a zodiac list!


## Application Structure

### Back End 

Restful API's were used as to organize routes 

* Python
   * boto3 (AWS Uploads)
* Flask
   * flask forms for backend validation 
* SQLAlchemy
   * self referncing model associations used to structure RDBMS
* PostgreSQL database


### Front End 

* JavaScript
   * aztroJS Wrapper for fetch sign based of Horoscopes(https://github.com/sameerkumar18/aztro/blob/master/docs/source/index.rst)

* React
   * Controlled inputs allowed user information to be recieved and kept in state improving performance. 
   * Components and a heavy use of Modals allowed for modulatrity seen throughout the app 

* Redux
  * The store consistently keeps user information uptodate allowing user to change their sign and have respective information change with it( ex. Daily Horoscope) 

* CSS
   * The idea behind the styling of this websit was to make it as "app" based as possible. With a switch of media consumption taking place on the phone. I wanted the user experience to simulate a "Zodi-Dex" where most useability was found on the users dashboard. 

## Getting Started 
Want to run Zodi-App locally? Here's how!

1. Clone this repository on the master branch (if main , in CLI [git branch -M main master])
```https://github.com/FremaAwuku/Zodi-App.git```
2. Install Backend Dependencies 
```
bash pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```
3. Create a **.env** file based on the example with proper settings for your
   development environment
   
  * ***TO USE AWS YOU WILL NEED TO SET UP S3 SERVICES, CREATE YOUR OWN BUCKET, AND ADD REGION, AWS_SECRET_KEY, AWS_ACCESS_ID to .env*** 
 
 
  * ***YOU WOULD ALSO NEED TO 1) CHANGE  BUCKET NAME IN USER ROUTES https://github.com/FremaAwuku/Zodi-App/blob/master/app/api/user_routes.py***
 
  * ***2) AWS URL USED IN AWS HELPER FUNCTION https://github.com/FremaAwuku/Zodi-App/blob/master/app/api/aws.py***
 
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Open a new terminal and cd into react app and run to install dependencies and start app
```npm install```
```npm start```


## Features


### User Actions

Logged Out-The only actions avaible to non-logged in users
  * Users can read a short description on[GET] **Sun Sign**
  * User can enter their birthdays and calculate [POST]**Sun Sign**
  
Logged In
  * Users can change profile picture [PUT]
  * Users can update personal **Sun Sign** to user profile[PUT]


### Zodiac List [GET] - rendering of rows in a list
  * Users can add [POST]names and signs to their zodiac list as well as 
  * Users can edit[PUT] matches to rows on their zodiac list to calculate 
  * Users can delete[DELETE] rows from their zodiac list 


### Compabatibilty[GET/POST]
 * Users when users add 2 names to their zodiac list a compability rating is calculated and rendered on list for user to read rating details

### Friend Requests 
  * Users can [GET] users can see friend requests recieved from other users.
  *  Users can [GET] users can see friend requests they've sent to other users through horoscope feed.
  *  Users can [POST] send friend requests 
  *  Users can [DELETE] delete friend requests 

### Friends 
  * Users can [GET] see all friends.
  *  Users can [POST] add friend through friend requests 
  *  Users can [DELETE] delete friend requests 

### Daily Horoscope 
  * [GET/POST] Once users update their sun signs , users get an daily horoscope provided by an outside API

### Horoscope Feed [GET]-rendering of all posts on feed
  * Users can [POST] Daily Horoscope to Horoscope Feed 
  * User can [PUT] Edit their posts on user dashboard 
  * Users can [DELETE] their horoscope posts 

### Post Comment [GET]-rendering of all comments on post detail
  * Users can [POST] post comments on a specific horoscope Post 
  * User can [PUT] Edit comments on a specific horoscope Post 
  * Users can [DELETE] their comments on a specific horoscope Post 

### Post Comment [GET]-rendering of all likes on post detail
  * Users can [POST] like a specific horoscope Post 
  * Users can [DELETE] unlike a specific horoscope Post 

