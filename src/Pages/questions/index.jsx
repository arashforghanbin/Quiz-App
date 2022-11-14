import React, { useContext, useEffect, useState } from "react";
import RadioInput from "../../components/common/RadioInput";
import QuestionButton from "../../components/common/QuestionButton";
import { contexts } from "../../context";
import "./questions.style.scss";
import ResultModal from "../../components/ResultModal";
import { ToastContainer } from "react-toastify";
import Loader from "../../components/Loader";
import DarkModeSwitch from "../../components/DarkModeSwitch";
const Questions = () => {
  const {
    chosenQuestions,
    counter,
    setSelected,
    score,
    setScore,
    questionQuantity,
    darkMode,
  } = useContext(contexts);
  const [allAnswers, setAllAnswers] = useState();

  useEffect(() => {
    if (chosenQuestions.length > 0) {
      const combinedAnswers = [
        chosenQuestions[counter]?.correct_answer,
        ...chosenQuestions[counter]?.incorrect_answers,
      ];
      setAllAnswers(shuffle(combinedAnswers));
    }
  }, [counter, chosenQuestions]);

  const formatArea = (value) => {
    const parser = new DOMParser();
    const deCoded = parser.parseFromString(value, "text/html").body.textContent;
    return deCoded;
  };

  function shuffle(options) {
    return options.sort(() => Math.random() - 0.5);
  }

  const handleCheck = (e) => {
    const correct = chosenQuestions[counter].correct_answer;
    setSelected(e);
    if (e === correct) setScore(score + 1);
  };

  return (
    <div>
      <DarkModeSwitch />
      {chosenQuestions.length > 0 ? (
        <>
          <ResultModal />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <main>
            <h1 className={`category ${darkMode ? "dark" : "light"}`}>
              {chosenQuestions.length > 0
                ? chosenQuestions[counter].category
                : ""}
            </h1>
            <h2 className="score">
              score: {score}/{questionQuantity}
            </h2>
            <section className={`card ${darkMode ? "dark" : "light"}`}>
              <p
                onClick={() => console.log(chosenQuestions)}
                className={`card__question ${darkMode ? "dark" : "light"}`}
              >
                {chosenQuestions.length > 0
                  ? formatArea(chosenQuestions[counter].question)
                  : ""}
              </p>
              <div className="card__options">
                {allAnswers &&
                  allAnswers.map((answer) => {
                    return (
                      <RadioInput
                        answer={answer}
                        onClick={() => handleCheck(answer)}
                        key={answer}
                        value={answer}
                        text={formatArea(answer)}
                      />
                    );
                  })}
              </div>
              <div className="card__buttons">
                <QuestionButton
                  className="card__buttons__next"
                  buttonName="Next Question"
                />
              </div>
            </section>
          </main>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </div>
  );
};

export default Questions;
