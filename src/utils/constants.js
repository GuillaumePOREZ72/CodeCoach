export const DIFFICULTIES = ["Beginner", "Medium", "Intermediate"];

export const LANGUAGES = ["JavaScript", "Python", "Java", "C++", "Go", "Rust"];

export const INITIAL_CODE = {
  JavaScript: `function solution() {\n  // Your code here\n}`,
  Python: `def solution():\n    # Your code here\n    pass`,
  Java: `public class Solution {\n    public void solution() {\n        // Your code here\n    }\n}`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid solution() {\n    // Your code here\n}`,
  Go: `package main\n\nfunc solution() {\n    // Your code here\n}`,
  Rust: `fn solution() {\n    // Your code here\n}`,
};

export const PROMPTS = {
  question: (level, selectedLanguage) => `
  Generate a random ${level} level coding interview question like on LeetCode.
  The programming language MUST be: ${selectedLanguage}
  Return ONLY valid JSON with this structure:
  {
    "language": "${selectedLanguage}",
    "problem": "string describing the problem",
    "example": "string with code examples in ${selectedLanguage},
    "constraints": "string",
    "note": "string or empty if none"
  }`,
  review: (problem, code, language) => `
  You are a helpful interview coach.
  The question is: "${problem}".
  The programming language is: ${language}.
  Here is the candidate's solution:
  ${code}
  
  1. If correct, say: "✅ Correct! Well done."
  2. If wrong, give hints but don't reveal the full answer.
  `,
};
