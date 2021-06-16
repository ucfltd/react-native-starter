import React from "react";
import {
	useTheme
} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

import { SIZES, FONTS } from '../const';

const Tab = createBottomTabNavigator()

const bottomTabs = () => {

	const { colors } = useTheme();

    return (
        <Tab.Navigator
			tabBarOptions={{
				labelStyle: {
					...FONTS.h4
				},
				style: {
					backgroundColor: `${ colors.backgroundAlt }`,
					borderTopColor: "transparent",
				},
			}}
		>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="About"
                component={Home}
            />
            <Tab.Screen
                name="Projects"
                component={Home}
            />
            <Tab.Screen
                name="Contact"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default bottomTabs;