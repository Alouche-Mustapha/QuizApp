import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { WelcomeScreen } from "../../screens/welcome.screen";
import { QuizScreen } from "../../screens/quiz.screen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.BottomSheetAndroid,
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
