// Index.android.js - place code in here for IOS!!!!

//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// create a component
const App = () => (
    <View style={{flex: 1}}>
    <Header headerText={'Albums'}/>
    <AlbumList />
    </View>
);



// render it to device
AppRegistry.registerComponent('albums', function(){ return App});