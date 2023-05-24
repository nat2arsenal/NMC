import { useContext } from 'react';
import QuestionBox from './QuestionBox';
import SelectionOption from './SelectionOption';
import { AppContext } from '../Context';
import OptionBox from './OptionBox';
import LastPage from '../pages/LastPage';
import { FaRegEnvelope } from 'react-icons/fa';
import SecondToLastPage from '../pages/SecondToLastPage';

export default function ChatBox() {
  const {
    selectedOption,
    selectionOptions,
    questionMessages,
    onLastPage,
    onSecondToLastPage,
    setOnSecondToLastPage,
  } = useContext(AppContext);

  const handleContinueButton = () => {
    setOnSecondToLastPage(true);
  };

  return (
    <>
      <div className="chat-container">
        <header>
          <div className="logo">
            <img src="/src/assets/Images/logo.svg" alt="No More Courses Logo" />
          </div>
        </header>
        <main>
          {onLastPage ? (
            <LastPage />
          ) : onSecondToLastPage ? (
            <SecondToLastPage />
          ) : (
            <div className="messages-container">
              <QuestionBox message={questionMessages.message1} />
              {selectedOption === '' ? (
                <>
                  <OptionBox option={selectionOptions.option1} />
                  <OptionBox option={selectionOptions.option2} />
                </>
              ) : null}

              <SelectionOption option={selectedOption} />
              {selectedOption === selectionOptions.option1 ? (
                <>
                  <QuestionBox message={questionMessages.message2} />
                  <QuestionBox message={questionMessages.message3} />
                  <button
                    className="continue-button"
                    onClick={handleContinueButton}
                  >
                    CONTINUE
                    <span>
                      <img
                        src="./src/assets/Images/arrow-down.svg"
                        alt="down-arrow"
                      />
                    </span>
                  </button>
                </>
              ) : selectedOption === selectionOptions.option2 ? (
                <>
                  <QuestionBox message={questionMessages.message6} />
                  <QuestionBox message={questionMessages.message7} />
                  <OptionBox option={selectionOptions.option3} />
                </>
              ) : null}
            </div>
          )}
        </main>
        <footer>
          {onLastPage ? (
            <div className="last-page-footer">
              <div className="button-container">
                <button>Contact Us</button>
              </div>
              <div className="button-container">
                <button>Visit Out Website</button>
              </div>
              <div className="social-icons-container">
                <div className="social-icons">
                  <img
                    src="./src/assets/Social Icons/1.png"
                    alt="fb-icon"
                  ></img>
                  <img
                    src="./src/assets/Social Icons/2.png"
                    alt="linkedin-icon"
                  ></img>
                  <img
                    src="./src/assets/Social Icons/3.png"
                    alt="twitter-icon"
                  ></img>
                  <img
                    src="./src/assets/Social Icons/4.png"
                    alt="instagram-icon"
                  ></img>
                  <img
                    src="./src/assets/Social Icons/5.png"
                    alt="wifi-icon"
                  ></img>
                  <img
                    src="./src/assets/Social Icons/6.png"
                    alt="youtube-icon"
                  ></img>
                </div>
                <div className="email-container">
                  <span className="envelope-icon">
                    <FaRegEnvelope />
                  </span>
                  <p>sales@nomorecourses.com</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="send-button">
              <div className="send-button--icon">
                <img src="/src/assets/Images/send-icon.svg" alt="send" />
              </div>
              <div className="send-button--text">choose the options</div>
            </div>
          )}
        </footer>
      </div>
      ;
    </>
  );
}
