//This is tu create a reducer
/////==================


//This initialState function is to store initial states (places, and selectedPlace)
//before any action occures.
import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE} from '../actions/actionType';
const initialState ={
    places: [],
    selectedPlace: null
};

//Set initial state in the reducer function, i.e. state ='initialState'
//so that if we dont have any existing state we will start with this initial state
const reducer =(state=initialState, action) =>{
// Inside the reducer, create switch to action type and the we can find out
//which act occurs and then will react it accordingly.
    switch (action.type) {
        case ADD_PLACE:
            return{    // <== alway return to brandnew state in redux
             ...state,
                 places: state.places.concat({
                 key: Math.random(), 
                 name: action.placeName, // Store placeName in name property
                 image: {uri: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/72721_10151548638648331_530310441_n.jpg?_nc_cat=101&_nc_ht=scontent-dub4-1.xx&oh=ad61c49fd9816ae5982fb1842e061629&oe=5D4E26EA'
                 }
                })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place => {
                    return place.key !==state.selectedPlace.key;//to compare place.key to selectedPlace.key
                  }),
                  selectedPlace: null
            };
 
        case  SELECT_PLACE:
        return{
            ...state,
            selectedPlace: state.places.find(place =>{
                return place.key===action.placeKey;
              })
        };
        case DESELECT_PLACE:
        return{
            ...state,
            selectedPlace: null
        };
        default: // <== We setup a default case in which we just want 
        return state; // <==to return to existing state unchanged. But then we can 
                        //react to different other action types, at this, we have
                        //no action types yet though. So, make sure that we have 
                        //some action type by adding acctions. To add action, do in by
                        //creating "actionType.js" in action folder
    }
};

export default reducer;