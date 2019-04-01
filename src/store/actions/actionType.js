//This is to add some action type in this file
//In this application, we have several action types for "places", e.g. "placeAddedHandler"
// "placeDeletedHandler", "placeSelectedHandler ". Check this in "App.js".
//======--------------------------
//This is to export fout constant here in the action types file
// and the convention is to create there constant to have clearly 
//defined action types and we dont have to type them all over the place 
// again with danger of mistyping and therefore well adding an error
//which is difficult to find.
//============
//The first action is ADD_PLACE ='', and the convention is to name the constant
// like the action type and use ann uppercase characters and the value then is 
//just a string with that value as 'ADD_PLACE' and it holds a string, add place.
//For details of concept of action creators, go to Redux official documentation
// at https://redux.js.org/ . This is basically a couple of functions that return
//objects that represent actions. It is really convenent especially once we start 
//runing asynchronous code or we need to handle side effects which we alwasy handle
// in actions

export const ADD_PLACE ='ADD_PLACE'; //<== this is the first action type

// The second type is to delete place from the list
export const DELETE_PLACE ='DELETE_PLACE'; //<= this is the second action type
// The third type is to select a place from the list
export const SELECT_PLACE ='SELECT_PLACE'; //<= this is the third action type
// The fourth type is to unselect (or deselect a place) a place from the list
export const DESELECT_PLACE ='DESELECT_PLACE'; //<= this is the fourth action type