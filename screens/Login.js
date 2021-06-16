import React from 'react';
import { 
    View,
    Text,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

const Login = ( { navigation }) => {
    return (
        <SafeAreaView>
			<View>
				<Text>Login!</Text>
				<TouchableOpacity
					onPress={
						() => navigation.navigate('Home')
					}
				>
					<Text>Home</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
    );
};

export default Login;