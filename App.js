import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/41C7MPSongL.jpg';
//import placeImage from './src/assets/Galway.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {connect} from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'


class App extends Component{
  
   //This function will allow user to add any input text
  placeAddedHandler=placeName=>{  
    this.props.onAddPlace (placeName);
  };
  //Create place Deleted Handler and dont need argument
  placeDeletedHandler =()=>{ 
    this.props.onDeletePlace();
  };
modalClosedHandler =()=>{
    this.props.onDeselectPlace();
  };
  //This is to store detail information to pass into <PlaceDetail> in view below
  placeSelectedHandler =  key =>{
    this.props.onSelectPlace(key);
  };  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace ={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
          />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.props.places} 
                // onItemDeleted ={this.placeDeletedHandler} // This is for delete an Item
                //onItemSelected ={this.placeDeletedHandler}// This is for delete an Item
                onItemSelected ={this.placeSelectedHandler}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  }
  
});

const mapStatetoProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};
const mapDispatchtoProps =dispatch =>{
  return{
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key)=> dispatch(selectPlace(key)),
    onDeselectPlace: ()=> dispatch (deselectPlace())
  };
};
export default connect (mapStatetoProps, mapDispatchtoProps)(App);
