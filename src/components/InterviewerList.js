import React from "react";
import PropTypes from "prop-types";

import "components/InterviewerList.scss";

import InterviewerListItem from "components/InterviewerListItem";

import PropTypes from "prop-types";

function InterviewerList(props) {
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={(event) => props.onChange(interviewer.id)}
      />
    );
  });

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired,
  };

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
