import React, { Component } from "react";
import PropTypes from "prop-types";

export class Progress extends Component {
  static propTypes = {
    /** maximum value of the progress bar */
    max: PropTypes.number,
    /** Value of the progress bar. */
    value: PropTypes.number,
  };
  state = { max: 0, value: 0 };
  componentDidMount = () => {
    this.setState(() => {
      return {
        max: this.props.max,
        value: this.props.value,
      };
    });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.value !== this.props.value) {
      this.setState(() => {
        return {
          value: this.props.value,
        };
      });
    }
  };

  render() {
    const { max, value } = this.props;
    let percentage = (value * 100) / max;
    return (
      <div className={this.props.className + " progress"}>
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          style={{ width: percentage + "%" }}>
          {percentage == "Infinity" ? 0 : percentage + "%"}
        </div>
      </div>
    );
  }
}

export default Progress;
