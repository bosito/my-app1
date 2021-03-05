import React from "react";
import { MenuPrincipal, Login } from '../Views/IndexViews';
import {
  Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, Certificados,
  Ejercicio5, MenuEjercicios, ComparadorPrestamo, CumpleañosApp,
  MenuComparadorPrestamo, MenuCumpleañosApp,
} from './ExamplexNavigation/IndexExample'
import { FacebookView, GoogleView, GithView } from '../Views/WebViews/IndexWebViews'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackExamples = createStackNavigator();
const StackExampleCotizador = createStackNavigator();
const StackCumpleañosApp = createStackNavigator();

function ExamplesSimples() {
  return (
    <StackExamples.Navigator>
      <StackExamples.Screen name="example6" options={{ title: 'Menu de ejercicios' }} component={MenuEjercicios} />
      <StackExamples.Screen name="example1" options={{ headerShown: false }} component={Ejercicio1} />
      <StackExamples.Screen name="example2" options={{ title: 'La fiesta' }} component={Ejercicio2} />
      <StackExamples.Screen name="example3" options={{ title: 'Asistencia' }} component={Ejercicio3} />
      <StackExamples.Screen name="example4" options={{ title: 'POO' }} component={Ejercicio4} />
      <StackExamples.Screen name="example5" options={{ title: 'Animacones Simples' }} component={Ejercicio5} />
    </StackExamples.Navigator>
  )
}

function ComparadorPrestamos() {
  return (
    <StackExampleCotizador.Navigator>
      <StackExampleCotizador.Screen name="MenuComparadorPrestamo"
        options={{ headerShown: false }}
        component={MenuComparadorPrestamo}
      />
      <StackExampleCotizador.Screen name="ComparadorPrestamo"
        options={{ headerShown: false }}
        component={ComparadorPrestamo}
      />
    </StackExampleCotizador.Navigator>
  )
}

function CumpleañosApps() {
  return (
    <StackCumpleañosApp.Navigator>
      <StackCumpleañosApp.Screen name="MenuCumpleañosApp"
        options={{ headerShown: false }}
        component={MenuCumpleañosApp}
      />
      <StackCumpleañosApp.Screen name="CumpleañosApp"
        options={{ headerShown: false }}
        component={CumpleañosApp}
      />
    </StackCumpleañosApp.Navigator>
  )
}

export default function MyStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="MenuPrincipal" options={{ headerShown: false }} component={MenuPrincipal} />
      <Stack.Screen name="exampleSimples" options={{ headerShown: false }} component={ExamplesSimples} />
      <Stack.Screen name="exampleUdemy" options={{ headerShown: false }} component={ComparadorPrestamos} />
      <Stack.Screen name="exampleUdemyApp2" options={{ headerShown: false }} component={CumpleañosApps} />
      <Stack.Screen name="exampleCertificados" options={{ headerShown: false }} component={Certificados} />
      <Stack.Screen name="Google" options={{ headerShown: false }} component={GoogleView} />
      <Stack.Screen name="Facebook" options={{ headerShown: false }} component={FacebookView} />
      <Stack.Screen name="Gith" options={{ headerShown: false }} component={GithView} />
    </Stack.Navigator>
  );
}