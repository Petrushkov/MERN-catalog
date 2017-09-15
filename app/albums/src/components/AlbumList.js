import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component  {
    constructor(props){
        super(props);
        this.state = { albums: [] };
    }
    componentDidMount(){
        axios.get('http://192.168.71.2:8000')
        .then(res => this.setState({ albums: res.data }));
    }
    renderAlbums() {
        return this.state.albums.map((album)=> 
            <AlbumDetail key={album.title} album={album}/>);
    }
    render() {
    return(
        <ScrollView>
        {
            this.renderAlbums()
        }
        </ScrollView>
    );
    }
}


export default AlbumList;