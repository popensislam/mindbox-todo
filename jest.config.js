module.exports = {
  preset: "vite-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["vite-jest", { jsx: "react" }],
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
