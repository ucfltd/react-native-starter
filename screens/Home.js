import React from 'react';
import { 
    View,
    Text,
	Switch,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';

import {
	useTheme
} from '@react-navigation/native';

import { CONFIG, THEME, SIZES } from '../const';


const Home = ( { navigation } ) => {
	const { colors } = useTheme();

	console.log(colors);

	const Title = styled.Text`
		color: ${ colors.text };
	`;

	// const Container = styled.View`
	// 	background-color: ${ colors.background };
	// 	height: 100%;
	// `;

    return (
			<View
			style={{ backgroundColor: colors.background }}
			>
				<SafeAreaView>
					{/* <Switch
						value={ theme.mode === 'dark' }
						onValueChange={ value => theme.setMode( value ? 'dark' : 'light' ) }
					/> */}
					<Text>
						THEME
					</Text>
					<Title>Hola!</Title>
					<TouchableOpacity
						onPress={
							() => navigation.navigate('Login')
						}
					><Text>Login</Text></TouchableOpacity>
				</SafeAreaView>
			</View>
    );
};


export default Home;