import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Home, Login } from './screens';

import { THEME } from './const';

import { createStackNavigator } from '@react-navigation/stack';
import { 
	NavigationContainer,
	useTheme
} from '@react-navigation/native';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import bottomTabs from './navigations/bottomTabs';

const Stack = createStackNavigator();

export default function App() {

	const scheme = useColorScheme();

	const { colors } = useTheme();
	
    return (
		<AppearanceProvider>
			<NavigationContainer
				theme={ scheme === 'dark' ? THEME.DarkTheme : THEME.LightTheme }
			>
				<Stack.Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName={'Login'}
				>
					<Stack.Screen
						name="Login"
						component={Login}
					/>
					{/* <Stack.Screen
						name="Home"
						component={Home}
					/> */}
					<Stack.Screen
						name="Home"
						component={bottomTabs}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppearanceProvider>
    );
}
