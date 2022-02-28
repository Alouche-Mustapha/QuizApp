import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";

import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight + 0}px;
`;

const ImgBackground = styled(ImageBackground).attrs({
  source: require("../../assets/1288076.jpg"),
})`
  position: absolute;
  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
`;

export const QuizScreen = () => {
  return (
    <Container>
      <ImgBackground />
      <Text style={{ color: "white" }}>WOOOOOOOW</Text>
    </Container>
  );
};
