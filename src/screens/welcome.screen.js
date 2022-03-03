import React, { useContext } from "react";
import { Dimensions, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-paper";

import styled from "styled-components/native";
import { QuestionsContext } from "../services/questions.context";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight + 0}px;
  background-color: #283154;
  justify-content: space-evenly;
`;

const TopContainer = styled.View``;

const Title = styled.Text`
  color: white;
  font-family: Comforter_400Regular;
  font-size: 70px;
  text-align: center;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-align: center;
`;

const BackgroundContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  margin-horizontal: ${Dimensions.get("screen").width * 0.15}px;
  border-radius: 20px;
  align-items: center;
`;

const ModuleButton = styled(Button).attrs({
  mode: "contained",
  color: "#2481ce",
  width: "60%",
  height: Dimensions.get("screen").height * 0.06,
  marginVertical: 10,
})`
  justify-content: center;
  border-radius: 30px;
`;

export const WelcomeScreen = ({ navigation }) => {
  const { questions } = useContext(QuestionsContext);

  return (
    <Container>
      <TopContainer>
        <Title>Quiz App</Title>
        <Description>Here you can test your knowledge</Description>
      </TopContainer>
      <BackgroundContainer>
        {questions.map((item, index) => (
          <ModuleButton
            key={index}
            onPress={() => navigation.navigate("quizReact", { quiz: item })}
          >
            {item.name}
          </ModuleButton>
        ))}
      </BackgroundContainer>
    </Container>
  );
};
