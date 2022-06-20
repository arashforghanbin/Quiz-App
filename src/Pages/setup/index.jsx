import React, { useContext, useEffect } from "react";
import NumberInput from "../../components/common/NumberInput";
import RangeInput from "../../components/common/RangeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { contexts } from "../../context";
import StartButton from "../../components/common/StartButton";
import "./setup.style.scss";

const Setup = () => {
  const {
    setAllCategories,
    allCategories,
    setCategory,
    setChosenQuestions,
    questionQuantity,
    category,
    difficulty,
    chosenQuestions,
  } = useContext(contexts);
  const getAllCategories = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api_category.php");
      setAllCategories(response.data.trivia_categories);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  const getQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?${
        questionQuantity && `amount=${questionQuantity}`
      }${category && `&category=${category}`}${
        difficulty && `&difficulty=${difficulty}`
      }&type=multiple`
    );
    setChosenQuestions(data.results);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    getQuestions();
    navigate("/questions");
  };

  return (
    <main className="container">
      <section className="setup">
        <form onSubmit={handleSubmit} className="setup__form">
          <h2 className="setup__form__title">Setup Quiz</h2>
          <NumberInput
            lableFor={"questionNumbers"}
            lableName={"Number Of Questions"}
            id={"questionNumbers"}
          />
          <label htmlFor="category">
            <p>Category</p>
            <select
              className="setup__form__select"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">All Categories</option>
              {allCategories?.map((category) => (
                <option id={category.id} key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <RangeInput
            lableFor={"difficulty"}
            labelName={"Difficulty:"}
            id={"difficulty"}
            min={"0"}
            max={"2"}
            step={"1"}
          />
          <StartButton type={"submit"} buttonName={"Start"} />
        </form>
      </section>
    </main>
  );
};

export default Setup;
