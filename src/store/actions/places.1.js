//We want to create this places.js file in actions folder
// because we want to store our places related
//actions and here we will also export a constant and we will name  it
//as "addPlace". Dont use upper case, and this actuallly will be a function.
//A function should get arguments which describe the place and if we have
//a look at our App.js file ath the add place handler (placeAddedHandler=placeName)
// we can see that for adding a plce, we need a name. So, we can expect to get the 
//place name as an argument here and then in this function.

import {ADD_PLACE, DELETE_PLACE, 
    SELECT_PLACE, DESELECT_PLACE} 
    from './actionType'; //<= need to import all actions

export const addPlace =(placeName) =>{
    return {                    // <== in this function we just simply return
        type: ADD_PLACE,                        // a javascript object because actions are just
        placeName: placeName                    //javascript object and action creator serve as a 
      //(name this place: pass on                 //factory which splits out actions, so it has to
      //placeName argument here)                 //split out a javasctipt object. To be a valid action
      //so this arument is the value             //this object need to be at least have one type property
      //pass on is the property name             //This is the fix requirement, it needs to have that.
      // which we can access in reducter          //The first object we return here is "ADD_PLACE".
       //later                                   //This "ADD_PLACE" action should also have a payload 
                                                //because this action will be consumed by the reducer at
                                                //the end, and the reducer shoud know  the name of the place
                                                //so that we should pass it on as 'placeName: placeName'

    };
}

export const deletePlace =()=>{
    return {
        type:DELETE_PLACE
    };
}

export const selectPlace =(key)=>{
    return{
        type: SELECT_PLACE,
        placeKEY: key
    };
}

export const deselectPlace =()=>{
    return {
        type: DESELECT_PLACE
    };
}