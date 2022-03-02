import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, Text, Dimensions } from "react-native";
import { Card, Button } from "react-native-paper";

import styled from "styled-components/native";
import { FadeAnim } from "../features/fade.animation";

const QuestionCard = styled(Card)`
  background-color: #0f3555aa;
  margin-horizontal: 30px;
`;

const QuestionTitle = styled(Card.Title).attrs({
  titleStyle: {
    color: "white",
    fontSize: Dimensions.get("screen").width * 0.05,
    maxWidth: "80%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  subtitleStyle: { color: "white", fontSize: 15 },
})`
  margin-vertical: 30px;
`;

const QuestionContent = styled(Card.Content)`
  height: 50%;
  justify-content: center;
  margin-vertical: 10px;
`;

const SubmitQuestion = styled(Card.Actions)`
  align-items: center;
  justify-content: center;
  margin-vertical: 30px;
`;

const ChoiceContainer = styled(TouchableOpacity)`
  border-width: 5px;
  border-color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Choice = styled.Text`
  color: white;
  font-size: ${Dimensions.get("screen").width * 0.05}px;
  text-align: center;
  font-weight: bold;
`;

export const QuestionComponent = ({ questions = {}, length }) => {
  const [index, setIndex] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [userAnswer, setUserAnswer] = useState();
  const [score, setScore] = useState(0);

  const {
    id = 1,
    question = "some question",
    answer = "aswer X",
    choices = ["X1", "X2", "X3", "X4"],
  } = questions[index];

  const nextQuestion = () => {
    if (index < length - 1) {
      let i = index + 1;
      setIndex(i);
      setClicked1(false);
    }
    //  else {
    //   Alert.alert("Result : ", "Score : " + score, [{ ok: () => null }]);
    // }
    if (userAnswer == answer) setScore(score + 1);
    console.log("userAnswer: " + userAnswer);
    console.log("score: " + score);
    console.log("answer: " + answer);
  };

  return (
    <QuestionCard>
      <QuestionTitle subtitle={id + "/" + length} title={question} />
      <QuestionContent>
        <FadeAnim>
          {choices.map((item, index) => (
            <ChoiceContainer
              style={clicked1 && { backgroundColor: "gray" }}
              onPress={() => {
                setUserAnswer(choices[index]);
              }}
              key={index}
            >
              <Choice>{item}</Choice>
            </ChoiceContainer>
          ))}
        </FadeAnim>
      </QuestionContent>
      <SubmitQuestion>
        <Button
          onPress={nextQuestion}
          mode="contained"
          style={{
            width: "80%",
            backgroundColor: "#2481ce",
          }}
        >
          <Text style={{ fontSize: 20 }}>NEXT</Text>
        </Button>
      </SubmitQuestion>
    </QuestionCard>
  );
};
