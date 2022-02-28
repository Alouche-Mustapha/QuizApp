import React from "react";
import { Dimensions, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-paper";

import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight + 0}px;
  background-color: #283154;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  color: white;
  font-family: Comforter_400Regular;
  font-size: 50px;
  text-align: center;
`;

const BackgroundContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  margin-horizontal: ${Dimensions.get("screen").width * 0.1}px;
  border-radius: 20px;
  align-items: center;
`;

const ModuleButton = styled(Button).attrs({
  mode: "contained",
  color: "#384578",
  width: "60%",
  height: Dimensions.get("screen").height * 0.06,
  marginVertical: 10,
})`
  justify-content: center;
`;

export const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Quiz App</Title>
      <BackgroundContainer>
        <ModuleButton onPress={() => navigation.navigate("quiz")}>
          Start Quiz
        </ModuleButton>
      </BackgroundContainer>
    </Container>
  );
};
