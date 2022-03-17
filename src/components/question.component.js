import React, { useState, useRef, useEffect } from "react";
import { Alert, Pressable, Dimensions, View, Modal, Text } from "react-native";
import { Card, ProgressBar } from "react-native-paper";

import { Button } from "react-native-elements";

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
  const stop = useRef(0);

  useEffect(() => {
    let subs = true;
    if (progress < 1 && stop.current < length) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 500);
    } else nextQuestion();
    return () => {
      subs = false;
    };
  }, [progress]);

  const {
    id = 1,
    question = "some question",
    answer = "aswer X",
    choices = ["Xdef", "Xdef2", "Xdef3", "Xdef4"],
  } = questions[index];

  const nextQuestion = () => {
    stop.current++;
    setProgress(0);
    if (userAnswer === answer && score.current < length) {
      score.current++;
    }
    if (index < length - 1) {
      setIndex(index + 1);
      pressed.current.map((_, index) => (pressed.current[index] = false));
    }
  };
  return (
    <>
      <FadeAnim>
        <ProgressBar
          style={{ height: 10, marginHorizontal: 10, borderRadius: 15 }}
          progress={progress}
          color={progress > 0.7 ? "red" : "#18C4FF"}
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
            title="NEXT"
            disabled={progress < 0.1}
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            icon={{
              name: "arrow-right",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconRight
            buttonStyle={{
              backgroundColor: "#2481ce",
              borderRadius: 25,
            }}
            titleStyle={{
              fontWeight: "bold",
              fontSize: Dimensions.get("screen").height * 0.025,
            }}
            containerStyle={{
              marginHorizontal: 50,
              width: 200,
              marginVertical: 10,
            }}
            onPress={nextQuestion}
          />
        </SubmitQuestion>
      </QuestionCard>

      {stop.current == length && (
        <Modal animationType="slide" transparent={true} visible={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#0f3555ab",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                {score > length / 2 ? "Congratulation" : "Oops!"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: score.current > length / 2 ? "green" : "red",
                  }}
                >
                  {score.current}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                >
                  / {length}
                </Text>
              </View>
              <Button
                title="Home"
                onPress={() => navigation.navigate("welcome")}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
