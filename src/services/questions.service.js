// import { mocksIndex } from "../mock/index";

export const quizRequest = () => {
  var mocksIndex;
  return new Promise((resolve, reject) => {
    fetch("http://192.168.1.58:1900/quizs")
      .then((res) => res.json())
      .then((res) => {
        mocksIndex = res;
        if (!mocksIndex) {
          reject("Not found");
        }
        resolve(mocksIndex);
      })
      .catch((err) => console.log(err));
  });
};

export const quizTransform = ({ quizs = [] }) => {
  return quizs;
};
