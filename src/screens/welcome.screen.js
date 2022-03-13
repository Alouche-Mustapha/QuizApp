import React, { useContext } from "react";
import { Dimensions, SafeAreaView, StatusBar, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { QuizsContext } from "../services/quizs.context";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight + 0}px;
  background-color: #283154;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  color: white;
  font-family: Comforter_400Regular;
  font-size: 80px;
  text-align: center;
`;

const SubTitle = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
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
  const { quizs } = useContext(QuizsContext);

  return (
    <Container>
      <Title>Quiz App</Title>
      <View>
        <SubTitle>Select a quiz to start</SubTitle>
        <BackgroundContainer>
          {quizs.map((item, index) => (
            <ModuleButton
              key={index}
              onPress={() => navigation.navigate("quiz", { quiz: item })}
            >
              <Text style={{ fontFamily: "Oswald_500Medium" }}>
                {item.name}
              </Text>
            </ModuleButton>
          ))}
        </BackgroundContainer>
      </View>
    </Container>
  );
};
