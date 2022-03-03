import React, { useState, useRef, useEffect } from "react";
import { Alert, Pressable, Text, Dimensions } from "react-native";
import { Card, Button, ProgressBar } from "react-native-paper";

import styled from "styled-components/native";
import { FadeAnim } from "../features/fade.animation";

const QuestionCard = styled(Card)`
  height: ${Dimensions.get("screen").height * 0.8}px;
  background-color: #0f3555a0;
  margin-horizontal: 30px;
  border-radius: 30px;
  margin-top: 20px;
`;

const QuestionTitle = styled(Card.Title).attrs({
  titleStyle: {
    color: "white",
    fontSize: Dimensions.get("screen").height * 0.025,
    maxWidth: "80%",
  },
  titleNumberOfLines: 3,
  subtitleStyle: { color: "white", fontSize: 15 },
})`
  margin-vertical: 30px;
`;

const QuestionContent = styled(Card.Content)`
  flex: 1;
  justify-content: space-around;
  margin-vertical: 10px;
`;

const SubmitQuestion = styled(Card.Actions)`
  align-items: center;
  justify-content: center;
`;

const ChoiceContainer = styled(Pressable)`
  border-width: 5px;
  border-color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2596beaa;
`;

const Choice = styled.Text`
  color: white;
  font-size: ${Dimensions.get("screen").height * 0.025}px;
  text-align: center;
  font-weight: bold;
`;

export const QuestionComponent = ({ questions = [], length, navigation }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const pressed = useRef([]);
  const score = useRef(0);

  const {
    id = 1,
    question = "some question",
    answer = "aswer X",
    choices = ["Xdef", "Xdef2", "Xdef3", "Xdef4"],
  } = questions[index];

  const nextQuestion = () => {
    setProgress(progress + 1 / length);
    if (userAnswer === answer && score.current < length) {
      score.current++;
    }
    if (index < length - 1) {
      setIndex(index + 1);
      pressed.current.map((_, index) => (pressed.current[index] = false));
    } else {
      Alert.alert("Result : ", "score : " + score.current + " / " + length, [
        {
          text: "Home",
          onPress: () => navigation.navigate("welcome"),
        },
      ]);
    }
  };

  return (
    <>
      <FadeAnim>
        <ProgressBar
          style={{ height: 10, marginHorizontal: 10, borderRadius: 15 }}
          progress={progress}
          color={"#18C4FF"}
        />
      </FadeAnim>

      <QuestionCard>
        <QuestionTitle subtitle={id + "/" + length} title={question} />
        <QuestionContent>
          <FadeAnim>
            {choices.map((item, index) => {
              pressed.current.push(false);
              return (
                <ChoiceContainer
                  style={{
                    borderColor: pressed.current[index] ? "#18C4FF" : null,
                  }}
                  onPress={() => {
                    setUserAnswer(choices[index]);
                    pressed.current.map((_, i) =>
                      i === index
                        ? (pressed.current[i] = true)
                        : (pressed.current[i] = false)
                    );
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
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: Dimensions.get("screen").height * 0.025,
              }}
            >
              NEXT
            </Text>
          </Button>
        </SubmitQuestion>
      </QuestionCard>
    </>
  );
};
