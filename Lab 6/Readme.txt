Some important points relate to this Lab:

1.) Enter the count of tweets and what tweet you want in the required fields and hit the "Download JSON" button. This will generate a JSON file in the data folder of your project. Now Enter the name of the CSV file you want and hit the "Download CSV" button to generate the required converted CSV file.

2.) Create the /read API in the backend to process the JSON file and get it converted to the equivalent CSV file.

3.) This processed JSON file converted to a CSV file is then send back by the server to the client and it gets downloaded in the default download loacation of the user's browser. Used the HTML 5 bolb functionality for this and appended it to the URL.

4.) Used AngularJS to bind data from the front-end. Used Bootstrap to create a table for the tweets to display. 

5.)Made sure all the necessary error checks are done. If no file exists in the data folder and the user clicks on "Download CSV" button, appropriate error is thrown. Similarly, if the user leaves the Enter CSV file name field blank, appropriate error is generated.

6.) The generated CSV file can be opened in MS excel or notepad to view.

7.) This lab is build upon Lab 5.

