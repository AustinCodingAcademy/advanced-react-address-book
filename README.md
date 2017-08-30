### Setup
* From address book directory, run yarn install, yarn start

### Do
* DONE--- Import the array of users into index.js
* DONE--- Create a folder in src called components to hold all our components
* DONE--- Create the UserDetail and ListOfUsers functional components
* DONE--- Import and use components in App
* DONE--- Send the user array into Apps and then into ListOfUsers
* DONE--- Send the first user from the array down into the UserDetail component

### Do
* DONE--- Add a button to the ListOfUsers component that says Hide
* DONE--- Add an onClick to the button and a handler
* DONE--- Make clicking the button hide the list and change the text to “Show”
* DONE--- If you click it again it will show the list and change the text back to “Hide”

### Do
*  DONE--- Change ListofUsers to be a class component
*  DONE--- Add a constructor
*  DONE--- Add a property called “state” that is an object
*  DONE--- Add a property on the state object called "visible"
*  DONE--- Add a method called “render” that returns the jsx the function returned

### Do
* DONE--- Add text box anywhere to ListOfUsers with a label “Search”
* DONE--- In ListOfUsers add a state property “searchText”, default to “”
* DONE--- Assign searchText to the value attribute of the text box

### Do
* DONE--- Add onChange to text box
* DONE--- In onChange handler function, setState the searchText to the value from the textbox

### Do
* DONE--- Create a variable called currentUser in index.js.
* DONE--- Define a function in index.js called selectUser that will take a user as a parameter and then set that user as the currentUser.
* DONE--- Send this function down the child tree so that ListOfUsers can call it
* DONE--- Change index.js to send currentUser down the child tree instead of App.js hard coding the first one (app should give currentUser to UserDetail)
* Register click event for ListOfUsers view link, call the function sent into props by parents, supply the argument of whatever user was clicked on.
* Re render the components
