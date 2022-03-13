import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";

import styled from "styled-components/native";
import { QuestionComponent } from "../components/question.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight + 0}px;
  justify-content: center;
`;

const ImgBackground = styled(ImageBackground).attrs({
  source: require("../../assets/1288076.jpg"),
})`
  position: absolute;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`;

const Title = styled.Text`
  align-self: center;
  color: white;
  margin-horizontal: 30px;
  font-family: Oswald_500Medium;
  font-size: 25px;
`;

export const QuizScreen = ({ navigation, route }) => {
  const { quiz } = route.params;

  return (
    <Container>
      <ImgBackground />
      <Title>{quiz.name}</Title>
      <QuestionComponent
        questions={quiz.questions}
        length={quiz.questions.length}
        navigation={navigation}
      />
    </Container>
  );
};
