import React, { useContext } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";

import styled from "styled-components/native";
import { QuestionComponent } from "../components/question.component";
import { QuestionsContext } from "../services/questions.context";

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

export const QuizScreen = () => {
  const { questions } = useContext(QuestionsContext);

  return (
    <Container>
      <ImgBackground />
      <QuestionComponent questions={questions} length={questions.length} />
    </Container>
  );
};
