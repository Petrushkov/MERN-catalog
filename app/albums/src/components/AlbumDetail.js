import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({album}) => {
const {title, artist, thumbnail_image, image, url} = album;
const {
	headerContentStyle,
	thumbnailStyle,
	thumbnailContainerStyle,
	headerTextStyle,
	imageStyle,
	imageCardStyle
	} = styles;
return (<Card>
			<CardSection >
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
				</View>
			</CardSection>
			<CardSection >
			<View style={imageCardStyle}>
					<Image 
					 source={{uri: image}}
					 style={imageStyle}
					/>
			</View>
			</CardSection>
			<CardSection>
			<Button onPress={() => Linking.openURL(url)}>
			Buy Now
			</Button>
			</CardSection>
		</Card>
	);
} 

const styles = {
	headerContentStyle: {

		flexDirection: 'row',
		justifyContent: 'flex-end'
	}, 
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight:10
	}, 
	imageCardStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageStyle: {
		height: 169,
		//flex: 1,
		width: 300
	}
};

export default AlbumDetails;