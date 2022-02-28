import { createContext, useEffect, useState } from "react";
import { quizRequest } from "./questions.service";

export const QuestionsContext = createContext();

export const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const retieveQuestions = () => {
    quizRequest()
      .then((questions) => {
        setQuestions(questions);
        console.log("====================================");
        console.log(questions);
        console.log("====================================");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retieveQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
