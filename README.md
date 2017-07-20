### Setup
* From address book directory, run yarn install, yarn start

### Do
* xImport the array of users into index.js
* xCreate a folder in src called components to hold all our components
* xCreate the UserDetail and ListOfUsers functional components
* xImport and use components in App
* xSend the user array into Apps and then into ListOfUsers
* xSend the first user from the array down into the UserDetail component

### Do
* xAdd a button to the ListOfUsers component that says Hide
* xAdd an onClick to the button and a handler
* xMake clicking the button hide the list and change the text to “Show”
* xIf you click it again it will show the list and change the text back to “Hide”

### Do
* xChange ListOfUsers to be a class component
* xAdd a constructor
* xAdd a property called “state” that is an object
* xAdd a property on the state object called "visible"
* xAdd a method called “render” that returns the jsx the function returned

### Do
* xAdd text box anywhere to ListOfUsers with a label “Search”
* xIn ListOfUsers add a state property “searchText”, default to “”
* xAssign searchText to the value attribute of the text box

### Do
* xAdd onChange to text box
* xIn onChange handler function, setState the searchText to the value from the textbox

### Do
* xCreate a variable called currentUser in index.js.
* xDefine a function in index.js called selectUser that will take a user as a parameter and then set that user as the currentUser.
* xSend this function down the child tree so that ListOfUsers can call it
* Change index.js to send currentUser down the child tree instead of App.js hard coding the first one
* Register click event for ListOfUsers view link, call the function sent into props by parents, supply the argument of whatever user was clicked on.
* Re render the components
