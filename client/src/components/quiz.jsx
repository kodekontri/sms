import React, { Component } from "react";
import QuestionData from "../questions";
import OptionButtonList from "./optionButtonList";
import Loader from "./loader";
import Progress from "./progress";

import "bootstrap/dist/css/bootstrap.min.css";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestion: 0, loaded: false };
  }

  componentDidMount = () => {
    // Request for questions and set the state
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questionCount: 0,
        question: QuestionData[currentQuestion].question,
        questionId: QuestionData[currentQuestion].id,
        options: QuestionData[currentQuestion].options,
        answers: [],
        loaded: true,
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      // Request for questions and set the state
      const { currentQuestion } = this.state;
      this.setState(() => {
        return {
          questionCount: QuestionData.length,
          questionId: QuestionData[currentQuestion].id,
          question: QuestionData[currentQuestion].question,
          options: QuestionData[currentQuestion].options,
          loaded: true,
        };
      });
    }
  };

  handleNextQuestion = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        currentQuestion:
          currentQuestion >= QuestionData.length - 1
            ? QuestionData.length - 1
            : currentQuestion + 1,
      };
    });
  };

  handlePrevQuestion = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        currentQuestion: currentQuestion <= 0 ? 0 : currentQuestion - 1,
      };
    });
  };

  handleInput = (e) => {
    const answer = {
      questionId: this.state.questionId,
      answer: e.target.value,
    };

    const { answers } = this.state;

    const newAnswers = answers.filter(
      (ans) => String(ans.questionId) !== String(answer.questionId)
    );

    newAnswers.push(answer);

    this.setState(() => {
      return {
        answers: newAnswers,
      };
    });
  };

  handleClick = (e) => {
    const confirm = window.confirm(
      "Are you sure you want to submit ? \nNote: This action can not be reversed"
    );
    if (confirm) {
      this.state.answers.length === 0 &&
        alert("You've not answered any question.");
    }
  };

  render() {
    if (this.state.loaded === false) {
      return <Loader />;
    }
    const { questionId, currentQuestion, question, options } = this.state;
    const answer = this.state.answers.find(
      (ans) => String(ans.questionId) === String(questionId)
    );
    return (
      <div className="card question">
        <div className="card-header Danger">
          <h1 className="text-center">QUIZ APP</h1>
          <button
            className="btn btn-success float-right ml-4"
            onClick={this.handleClick}>
            Final Submit
          </button>
          <Progress
            className="my-4"
            max={this.state.questionCount}
            value={this.state.currentQuestion + 1}
          />
        </div>
        <div className="card-body">
          <div className="font-weight-bold h3 mb-5">
            <span>{question}</span>
          </div>
          <div>
            <OptionButtonList
              options={options}
              identifier={currentQuestion}
              onInput={this.handleInput}
              userAnswer={answer?.answer}
            />
          </div>
        </div>
        <div className="card-footer">
          <div className="btn-group btn-block">
            <button
              className="btn btn-dark rounded-0"
              onClick={this.handlePrevQuestion}>
              Previous
            </button>
            <button
              className="btn btn-dark rounded-0"
              onClick={this.handleNextQuestion}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
