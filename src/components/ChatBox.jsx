import { useContext } from 'react';
import QuestionBox from './QuestionBox';
import SelectionOption from './SelectionOption';
import { AppContext } from '../Context';
import OptionBox from './OptionBox';
import LastPage from '../pages/LastPage';
import { FaRegEnvelope } from 'react-icons/fa';
import SecondToLastPage from '../pages/SecondToLastPage';
import Delay from './Delay';

export default function ChatBox() {
  const {
    selectedOption,
    selectionOptions,
    questionMessages,
    onLastPage,
    onSecondToLastPage,
    setOnSecondToLastPage,
    setOnLastPage,
    setCloseVideo,
    setSelectedOption,
  } = useContext(AppContext);

  const handleContinueButton = () => {
    setOnSecondToLastPage(true);
  };

  const handleLogoClick = () => {
    setCloseVideo(false);
    setOnSecondToLastPage(false);
    setOnLastPage(false);
    setSelectedOption('');
  };

  return (
    <>
      <div className="chat-container">
        <header>
          <div className="logo">
            <img
              src="/assets/Images/logo.svg"
              alt="No More Courses Logo"
              onClick={handleLogoClick}
            />
          </div>
        </header>
        <main>
          {onLastPage ? (
            <LastPage />
          ) : onSecondToLastPage ? (
            <SecondToLastPage />
          ) : (
            <div className="messages-container">
              <Delay time={2000} display="typing...">
                <QuestionBox message={questionMessages.message1} />
              </Delay>

              {selectedOption === '' && (
                <>
                  <Delay time={3000} display="">
                    <OptionBox option={selectionOptions.option1} />
                    <OptionBox option={selectionOptions.option2} />
                  </Delay>
                </>
              )}

              <SelectionOption option={selectedOption} />
              {selectedOption === selectionOptions.option1 ? (
                <>
                  <Delay time={500} display="">
                    <Delay time={1500} display="typing...">
                      <QuestionBox message={questionMessages.message2} />
                    </Delay>
                  </Delay>
                  <Delay time={3500} display="">
                    <Delay time={2000} display="typing...">
                      <QuestionBox message={questionMessages.message3} />
                    </Delay>
                  </Delay>
                  <Delay time={7500} display="">
                    <button
                      className="continue-button"
                      onClick={handleContinueButton}
                    >
                      CONTINUE
                      <span>
                        <img
                          src="/assets/Images/arrow-down.svg"
                          alt="down-arrow"
                        />
                      </span>
                    </button>
                  </Delay>
                </>
              ) : (
                selectedOption === selectionOptions.option2 && (
                  <>
                    <Delay time={1500} display="">
                      <Delay time={3000} display="typing...">
                        <QuestionBox message={questionMessages.message6} />
                      </Delay>
                    </Delay>
                    <Delay time={7500} display="">
                      <Delay time={1500} display="typing...">
                        <QuestionBox message={questionMessages.message7} />
                      </Delay>
                    </Delay>
                    <Delay time={11000} display="">
                      <OptionBox option={selectionOptions.option3} />
                    </Delay>
                  </>
                )
              )}
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
                <button>Visit Our Website</button>
              </div>
              <div className="social-icons-container">
                <div className="social-icons">
                  <img src="/assets/Social Icons/1.png" alt="fb-icon"></img>
                  <img
                    src="/assets/Social Icons/2.png"
                    alt="linkedin-icon"
                  ></img>
                  <img
                    src="/assets/Social Icons/3.png"
                    alt="twitter-icon"
                  ></img>
                  <img
                    src="/assets/Social Icons/4.png"
                    alt="instagram-icon"
                  ></img>
                  <img src="/assets/Social Icons/5.png" alt="wifi-icon"></img>
                  <img
                    src="/assets/Social Icons/6.png"
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
                <img src="/assets/Images/send-icon.svg" alt="send" />
              </div>
              <div className="send-button--text">choose the options</div>
            </div>
          )}
        </footer>
      </div>
    </>
  );
}
