import React from 'react';
import { connect } from 'react-redux';
import { answerQuestion,
        updateQuestionAnswer } from '../../actions/question_actions';
import { Form, RadioGroup, Radio } from 'react-form';

const mapDispatchToProps = (dispatch) => {
  return {
    answerQuestion: (answerId) => dispatch(answerQuestion(answerId)),
    reAnswerQuestion: (questionAnswerId, newAnswerId) =>
    dispatch(updateQuestionAnswer(questionAnswerId, newAnswerId)),
  };
};

const OpenQuestion = (props) => {
  const answerThisQuestion = props.questionAnswer ?
    (newId) => props.reAnswerQuestion(props.questionAnswer.id, newId) :
    (id) => props.answerQuestion(id);

  return  (
    <Form
      onSubmit={(values) => {
          answerThisQuestion(values.answerId).then(
            () => props.complete(values.answerId)
          );
      }}
      defaultValues={{answerId: props.questionAnswer ?
                      props.questionAnswer.answer_id : null}}
    >
      {({ submitForm }) => {
        return (
          <form onSubmit={ submitForm }>
            <div className='question'>
              <h4>{props.question.question_text}</h4>
              <RadioGroup field='answerId'>
                { props.question.answerChoices.map((choice, idx) => {
                  return (
                    <label key={idx}>
                      <Radio value={choice.id} />
                      { choice.answer_text }
                    </label>
                  );
                })}
              </RadioGroup>
              <div>
                <button>Answer</button>
              </div>
            </div>

          </form>
        );
      }}
    </Form>
  );
};

export default connect(null, mapDispatchToProps)(OpenQuestion);
