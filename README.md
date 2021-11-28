# reactApplication

How to run application:
1. Clone repo onto desktop
2. Once repo has been cloned open terminal 
3. Check your version of npm and Node.js (if you have these installed) by typing the following commands node -v and npm -v)
4. If you do not have the above installed, install them by entering npm install and node install in the terminal 
5. Go to the directory of the blogapp by typing in cd blogapp in the terminal
6. run npm start to run the React application.
7. To see Ajax running first do the following:

    A. Open the application in an IDE like WebStorm or IntelliJ. Uncomment lines 15 - 19 in ListNewsItems.js in the components folder
    B. Comment out line 20
    B. Right click on the background of the website, click on inspect, click on console and you will see every 5 seconds ajax loading 
Google News API does stop working after 1,000 requests and the next request won't be made until 24 hours later So I commented out the 5 second intervals, so it won't timeout when it is needed. 


Photo of application's homepage!

[Screen Shot 2021-11-27 at 2 04 24 PM](https://user-images.githubusercontent.com/67564107/143724946-aaf03544-70cd-4b24-ae1b-195d09802d6c.png)
