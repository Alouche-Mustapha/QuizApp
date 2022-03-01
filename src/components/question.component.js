import React, { useState } from "react";
import { Alert, Pressable, Text } from "react-native";
import { Card, Button } from "react-native-paper";

import styled from "styled-components/native";
import { FadeAnim } from "../features/fade.animation";

const QuestionCard = styled(Card)`
  background-color: #0f3555aa;
  margin-horizontal: 30px;
`;

const QuestionTitle = styled(Card.Title).attrs({
  titleStyle: { color: "white", fontSize: 30 },
  subtitleStyle: { color: "white", fontSize: 15 },
})`
  margin-vertical: 30px;
`;

const QuestionContent = styled(Card.Content)``;

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
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const QuestionComponent = ({ questions = {}, length }) => {
  const [index, setIndex] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
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
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked1(false);
      if (userAnswer === answer) {
        let s = score + 1;
        setScore(s);
        console.log("====================================");
        console.log(s);
        console.log("====================================");
      }
    } else {
      Alert.alert("Result : ", "Score : " + score, [{ ok: () => null }]);
    }
  };

  return (
    <QuestionCard>
      <QuestionTitle subtitle={id + "/" + length} title={question} />
      <QuestionContent>
        <FadeAnim>
          <ChoiceContainer
            style={clicked1 && { backgroundColor: "gray" }}
            onPress={() => {
              setClicked1(!clicked1);
              setClicked2(false);
              setClicked3(false);
              setClicked4(false);
              setUserAnswer(choices[0]);
            }}
          >
            <Choice>{choices[0]}</Choice>
          </ChoiceContainer>
          <ChoiceContainer
            style={clicked2 && { backgroundColor: "gray" }}
            onPress={() => {
              setClicked2(!clicked2);
              setClicked1(false);
              setClicked3(false);
              setClicked4(false);
              setUserAnswer(choices[1]);
            }}
          >
            <Choice>{choices[1]}</Choice>
          </ChoiceContainer>
          <ChoiceContainer
            style={clicked3 && { backgroundColor: "gray" }}
            onPress={() => {
              setClicked3(!clicked3);
              setClicked2(false);
              setClicked1(false);
              setClicked4(false);
              setUserAnswer(choices[2]);
            }}
          >
            <Choice>{choices[2]}</Choice>
          </ChoiceContainer>
          <ChoiceContainer
            style={clicked4 && { backgroundColor: "gray" }}
            onPress={() => {
              setClicked4(!clicked4);
              setClicked2(false);
              setClicked3(false);
              setClicked1(false);
              setUserAnswer(choices[3]);
            }}
          >
            <Choice>{choices[3]}</Choice>
          </ChoiceContainer>
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
