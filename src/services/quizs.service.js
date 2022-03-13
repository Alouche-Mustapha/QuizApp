// import mocks from "../mock/quiz.json";

export const quizsRequest = () => {
  return new Promise((resolve, reject) => {
    let mocks = {};

    // fetch("http://192.168.1.55:1900/quizs", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({
    //     name: "Test",
    //     questions: [
    //       {
    //         id: 1,
    //         question: "React Native est un : ",
    //         answer: "framework ",
    //         choices: [
    //           "library",
    //           "language de programmation",
    //           "framework ",
    //           "langage de requêtes structurées",
    //         ],
    //       },
    //     ],
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));

    fetch("http://192.168.1.55:1900/quizs")
      .then((respense) => respense.json())
      .then((jsonRespense) => {
        mocks = jsonRespense;
        if (!mocks) {
          reject("Not found");
        }
        resolve(mocks);
      })
      .catch((error) => console.log(error));
  });
};

export const quizsTransform = ({ quizs = [] }) => {
  return quizs;
};
