import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * @class OptionButton
 *
 * Option button for the quiz app
 *
 * @props option [string]
 * @props identifier [string]
 * @props userAnswer [string]
 * @props onInput [function]
 */

export class OptionButtonList extends Component {
  static propTypes = {
    /** array of options to be displayed */
    option: PropTypes.array,
    /** general identifier for the option. this could be the question id */
    identifier: PropTypes.string,
    /** User answer to validate id the option has been choosen */
    userAnswer: PropTypes.string,
    /** event handler for user selection */
    onInput: PropTypes.func,
  };
  handleInput = (e) => {
    this.props.onInput(e);
  };
  render() {
    const alphabets = ["A", "B", "C", "D", "E"];
    return (
      <>
        {this.props.options.map((option, index) => {
          return (
            <span key={"option-" + this.props.identifier + "" + index}>
              <span>{alphabets[index]}. </span>
              <label>
                <input
                  type="radio"
                  name={"answer"}
                  checked={String(this.props.userAnswer) === String(option)}
                  hidden
                  value={option}
                  onChange={this.handleInput}
                />
                <span>{option}</span>
              </label>
              <br />
            </span>
          );
        })}
      </>
    );
  }
}

export default OptionButtonList;
