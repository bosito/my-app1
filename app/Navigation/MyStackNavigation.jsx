import React from "react";
import { MenuPrincipal } from '../Views/IndexViews';
import { Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, Ejercicio6 } from './ExamplexNavigation/IndexExample'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="MenuPrincipal">
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
      <Stack.Screen name="example1" component={Ejercicio1} />
      <Stack.Screen name="example2" options={{ title: 'La fiesta' }} component={Ejercicio2} />
      <Stack.Screen name="example3" options={{ title: 'Asistencia' }} component={Ejercicio3} />
      <Stack.Screen name="example4" options={{ title: 'POO' }} component={Ejercicio4} />
      <Stack.Screen name="example5" options={{ title: 'Animacones Simples' }} component={Ejercicio5} />
      <Stack.Screen name="example6" options={{ title: 'Carrusel animable' }} component={Ejercicio6} />
    </Stack.Navigator>
  );
}
