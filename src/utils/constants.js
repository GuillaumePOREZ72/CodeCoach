export const DIFFICULTIES = ["Beginner", "Medium", "Intermediate"];

export const INITIAL_CODE = `function solution() {\n // Your code here\n}`;

export const PROMPTS = {
  question: (level) => `
  Generate a random ${level} level coding interview question like on LeetCode.
  Return ONLY valid JSON with this structure:
  {
    "problem": "string",
    "example": "string",
    "constraints": "string",
    "note": "string or empty if none"
  }`,
  review: (problem, code) => `
  You are a helpful interview coach.
  The question is: "${problem}".
  Here is the candidate's solution:
  ${code}
  
  1. If correct, say: "✅ Correct! Well done."
  2. If wrong, give hints but don't reveal the full answer.
  `,
};
