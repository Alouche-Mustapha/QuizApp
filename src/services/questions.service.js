import { mocksIndex } from "../mock/index";

export const quizRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mocksIndex;
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};
