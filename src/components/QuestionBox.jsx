import PropTypes from 'prop-types';

export default function QuestionBox({ message }) {
  return (
    <>
      <div className="question-box-container">
        <div className="avatar">
          <img src="./src/assets/Images/chat-avatar.png" alt="chat-avatar" />
        </div>
        <div className="message">{message}</div>
      </div>
    </>
  );
}

QuestionBox.propTypes = {
  message: PropTypes.node,
};
