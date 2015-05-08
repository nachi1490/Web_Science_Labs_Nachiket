Some important points relate to this Lab:

1.) "Branding" as required by this lab is done via a landing page. User can hit the "Enter" button on top right or the "Get started" button to enter the application. 

2.) Enter the count of tweets and what tweet you want in the required fields and hit the "Get Tweets" button. This will generate a JSON file in the data folder of your project called data.json. Now Enter the name of the CSV file you want and hit the "Download CSV" button to generate the required converted CSV file.

3.) Created the /read API in the backend to process the JSON file and get it converted to the equivalent CSV file.

4.) Made use of bootstrap-table pagination this time to enhance the look and feel of the application. Large data is displayed in pages. User also has a search option which filters the table according to data entered. There is a new refresh option which reloads the data from backend. Toggle button is present which 

5.) Used AngularJS to bind data from the front-end. Used Bootstrap to create a table for the tweets to display. 

6.)Made sure all the necessary error checks are done. If no file exists in the data folder and the user clicks on "Download CSV" button, appropriate error is thrown. Similarly, if the user leaves the Enter CSV file name field blank, appropriate error is generated. Similar for all other buttons.

7.) On click of "Save in Mongo" button, the appropriate data will be generated in the MongoDB which is pulled from twitter.

8.) On click of "Read" button, the user can enter the count of tweets to be displayed in the table. The table will be populated with the entered count of tweets below

9.)Created a Mongoose model to store data in MongoDB. Made use of insert and limit commands to do the same. The mongoose DB schema can be found in the models folder.

10.) Appropriate error checking is taken care of and user is notified of the same.

11.) Have made of Bootstrap for the front-end due to which the whole application is responsive as required by this Lab!



