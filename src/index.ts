import type { HttpFunction } from "@google-cloud/functions-framework";

export const TestFunction: HttpFunction = (req, res) => {
  const sample: string = "hello world";
  console.log(sample);
};
