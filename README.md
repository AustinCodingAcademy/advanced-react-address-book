### Setup
* From address book directory, run yarn install, yarn start


##### A note for Windows users about line-endings
- If you're getting errors like this:

```bash
(linebreak-style) Expected linebreaks to be 'LF' but found 'CRLF'. (eslint)
```
You can fix this by changing how Atom parses line endings in your code. (Meaning how it knows where you hit `Enter`).
By default, you should have [this plugin](https://github.com/atom/line-ending-selector) installed, which will allow you to change your line-ending encoding:

**1. Click on this section in the bottom-right of your screen.**
![](https://cloud.githubusercontent.com/assets/1305617/9274149/6b317568-4293-11e5-83ba-614a6c0d9890.png)
**2. Then just select `LF`. The errors should go away.**
![](https://cloud.githubusercontent.com/assets/1305617/9273907/2be5c136-4291-11e5-94af-65ece408eb12.png)
### Do
* Import the array of users into index.js
* Create a folder in src called components to hold all our components
* Create the UserDetail and ListOfUsers functional components
* Import and use components in App
* Send the user array into Apps and then into ListOfUsers
* Send the first user from the array down into the UserDetail component

### Do
* Add a button to the ListOfUsers component that says Hide
* Add an onClick to the button and a handler
* Make clicking the button hide the list and change the text to “Show”
* If you click it again it will show the list and change the text back to “Hide”

### Do
* Change ListOfUsers to be a class component
* Add a constructor
* Add a property called “state” that is an object
* Add a property on the state object called "visible"
* Add a method called “render” that returns the jsx the function returned

### Do
* Add text box anywhere to ListOfUsers with a label “Search”
* In ListOfUsers add a state property “searchText”, default to “”
* Assign searchText to the value attribute of the text box

### Do
* Add onChange to text box
* In onChange handler function, setState the searchText to the value from the textbox

### Do
* Create a variable called currentUser in index.js. 
* Define a function in index.js called selectUser that will take a user as a parameter and then set that user as the currentUser.
* Send this function down the child tree so that ListOfUsers can call it
* Change index.js to send currentUser down the child tree instead of App.js hard coding the first one
* Register click event for ListOfUsers view link, call the function sent into props by parents, supply the argument of whatever user was clicked on.
* Re render the components


