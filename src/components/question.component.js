import React, { useState, useRef } from "react";
import { Alert, Text, Dimensions, Pressable, View } from "react-native";
import { Card, Button, ProgressBar } from "react-native-paper";

import styled from "styled-components/native";
import { FadeAnim } from "../features/fade.animation";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const QuestionCard = styled(Card)`
  flex: 1;
  justify-content: space-between;
  background-color: #0f3555aa;
  margin-horizontal: 30px;
  margin-top: 10px;
`;

const QuestionTitle = styled(Card.Title).attrs({
  titleStyle: {
    color: "white",
    fontSize: Dimensions.get("screen").width * 0.05,
  },
  subtitleStyle: { color: "white", fontSize: 15 },
  titleNumberOfLines: 2,
})`
  margin-vertical: 30px;
`;

const QuestionContent = styled(Card.Content)`
  flex: 1;
  justify-content: center;
  margin-vertical: 10px;
`;

const SubmitQuestion = styled(Card.Actions)`
  align-items: center;
  justify-content: center;
  margin-vertical: 30px;
`;

const ChoiceContainer = styled(Pressable)`
  border-width: 5px;
  border-color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Choice = styled.Text`
  color: white;
  font-size: ${screenHeight * 0.025}px;
  text-align: center;
  font-weight: bold;
`;

export const QuestionComponent = ({ questions = {}, length, navigation }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const pressed = useRef([]);
  const score = useRef(0);

  const { id = 0, question = "", answer = "", choices = [] } = questions[index];

  const nextQuestion = () => {
    setProgress(progress + 1 / length);
    if (index < length - 1) {
      if (answer === userAnswer) score.current++;
      setIndex(index + 1);
      pressed.current.map((v, i) => {
        pressed.current[i] = false;
      });
    } else {
      if (answer === userAnswer) score.current++;
      Alert.alert(
        score.current >= length / 2 ? "Quiz passé" : "Quiz échoué",
        "score : " + score.current,
        [{ text: "Home", onPress: () => navigation.navigate("welcome") }]
      );
    }
  };

  return (
    <View style={{ flex: 0.9 }}>
      <ProgressBar
        style={{ height: 10, marginHorizontal: 20, borderRadius: 20 }}
        progress={progress}
        color="#185eb5"
      />
      <QuestionCard>
        <QuestionTitle subtitle={id + "/" + length} title={question} />
        <QuestionContent>
          <FadeAnim>
            {choices.map((item, index) => {
              pressed.current.push(false);
              return (
                <ChoiceContainer
                  style={{
                    borderColor: pressed.current[index] ? "#185eb5" : null,
                  }}
                  onPress={() => {
                    pressed.current.map((_, i) => {
                      i === index
                        ? (pressed.current[i] = true)
                        : (pressed.current[i] = false);
                    });
                    setUserAnswer(choices[index]);
                  }}
                  key={index}
                >
                  <Choice>{item}</Choice>
                </ChoiceContainer>
              );
            })}
          </FadeAnim>
        </QuestionContent>
        <SubmitQuestion>
          <Button
            onPress={nextQuestion}
            mode="contained"
            style={{
              width: "60%",
              backgroundColor: "#2481ce",
            }}
          >
            <Text style={{ fontSize: screenWidth * 0.04 }}>NEXT</Text>
          </Button>
        </SubmitQuestion>
      </QuestionCard>
    </View>
  );
};
