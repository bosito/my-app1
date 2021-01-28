import React from "react";
import { MenuPrincipal, Login } from '../Views/IndexViews';
import { Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, MenuEjercicios } from './ExamplexNavigation/IndexExample'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackExamples = createStackNavigator();

function ExamplesSimples() {
  return (
    <StackExamples.Navigator>
      <StackExamples.Screen name="example6" options={{ title: 'Menu de ejercicios' }} component={MenuEjercicios} />
      <StackExamples.Screen name="example1" component={Ejercicio1}/>
      <StackExamples.Screen name="example2" options={{ title: 'La fiesta' }} component={Ejercicio2}/>
      <StackExamples.Screen name="example3" options={{ title: 'Asistencia' }} component={Ejercicio3}/>
      <StackExamples.Screen name="example4" options={{ title: 'POO' }} component={Ejercicio4}/>
      <StackExamples.Screen name="example5" options={{ title: 'Animacones Simples' }} component={Ejercicio5}/>
    </StackExamples.Navigator>
  )
}

export default function MyStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
      <Stack.Screen name="exampleSimples" options={{ headerShown: false }} component={ExamplesSimples} />
    </Stack.Navigator>
  );
}