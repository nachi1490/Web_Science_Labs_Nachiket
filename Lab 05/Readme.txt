Some important points relate to this Lab:

1.) Made use of the twitter REST API to get the tweets from twitter. It accepts a mandatory Query(q) parameter and an optional count parameter based on which it fetches data in JSON format.

2.) Made use of express routing mechanism. Created several API's in the backend to redirect as and whrn required. For Eg. when the user hits the 'Get tweets' button, the /getTweets API in the backend is called which talks with the Twitter API.

3.) Made use of a templating engine called 'SWIG' to render HTML pages. It is a comaparatively good templating engine than the default 'Jade' which comes along with exrpress as it renders the HTML page directly from the views folder.

4.) Used AngularJS to bind data from the front-end. Used Bootstrap to create a table for the tweets to display. 

5.)Made use of a NPM package to access twitter API called 'Twit'. It provides simple commands such as 'GET' and 'POST' to talk with the twitter API.

6.) The JSON file containing the tweets gets generated in the data folder in the project folder.

