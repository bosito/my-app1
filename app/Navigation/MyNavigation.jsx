import React from 'react';
import MyStackNavigation from './MyStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function MyNavigation() {
    return (
        <NavigationContainer>
            <MyStackNavigation/>
        </NavigationContainer>
    )
}
