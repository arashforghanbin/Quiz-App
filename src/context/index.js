import { createContext, useState } from "react";

let intialValue = 0;
export const contexts = createContext({
  difficulty: "hard",
  setDifficulty: () => {},
  allCategories: "",
  setAllCategories: () => {},
  backgroundSize: "100%",
  setbackgroundSize: () => {},
  questionQuantity: "10",
  setQuestionQuantity: () => {},
  category: "",
  setCategory: () => {},
  chosenQuestions: [],
  setChosenQuestions: () => {},
  counter: intialValue,
  setCounter: () => {},
  selected: "",
  setSelected: () => {},
  score: 0,
  setScore: () => {},
  isActive: false,
  setIsActive: () => {},
});

const ContextProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("hard");
  const [allCategories, setAllCategories] = useState([]);
  const [backgroundSize, setbackgroundSize] = useState("100%");
  const [questionQuantity, setQuestionQuantity] = useState("10");
  const [category, setCategory] = useState("");
  const [chosenQuestions, setChosenQuestions] = useState([]);
  const [counter, setCounter] = useState(intialValue);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <contexts.Provider
      value={{
        difficulty,
        setDifficulty,
        allCategories,
        setAllCategories,
        backgroundSize,
        setbackgroundSize,
        questionQuantity,
        setQuestionQuantity,
        category,
        setCategory,
        chosenQuestions,
        setChosenQuestions,
        counter,
        setCounter,
        selected,
        setSelected,
        score,
        setScore,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextProvider;
