import mocks from "../mock/quiz1.json";

export const quizRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mocks;
    if (!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};
