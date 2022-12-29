import React from 'react';
import HomeScreen from './app/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddStudentScreen from './app/Screens/AddStudentScreen';
import ShowAllScreen from './app/Screens/ShowAllScreen';
import SelectItemScreen from './app/Screens/SelectItemScreen';
import EditScreen from "./app/Screens/EditScreen";
import SearchScreen from './app/Screens/SearchScreen';
import SelectItemBySearchScreen from './app/Screens/SelectItemBySearchScreen';




const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen name="HomeScreen" component={HomeScreen} />
  <Stack.Screen name="ShowAllScreen" component={ShowAllScreen} />
  <Stack.Screen name="AddStudentScreen" component={AddStudentScreen} />
  <Stack.Screen name="SelectItemScreen" component={SelectItemScreen} />
  <Stack.Screen name="EditScreen" component={EditScreen} />
  <Stack.Screen name="SearchScreen" component={SearchScreen} />
  <Stack.Screen name="SelectItemBySearchScreen" component={SelectItemBySearchScreen} />
</Stack.Navigator>
)

function App(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;