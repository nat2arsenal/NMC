import { useContext, useState } from 'react';
import QuestionBox from './QuestionBox';
import SelectionOption from './SelectionOption';
import { AppContext } from '../Context';
import OptionBox from './OptionBox';
import { FaRegEnvelope } from 'react-icons/fa';
import Delay from './Delay';
import Carousel from './Carousel';
import Recommendations from './Recommendations';

export default function ChatBox() {
  const { state, dispatch } = useContext(AppContext);
  const [onBottom, setOnBottom] = useState(false);

  const handleContinueButton = () => {
    dispatch({ type: 'SECOND_TO_LAST_SECTION' });
    const element = document.getElementById('chatbox');
    setTimeout(() => element.scrollTo(0, 318), 50);
  };

  const handleLogoClick = () => {
    dispatch({ type: 'REFRESH_PAGE' });
  };

  const handleScroll = (e) => {
    const target = e.target;

    if (target.scrollHeight - target.scrollTop < target.clientHeight + 1) {
      setOnBottom(true);
      // console.log('bottom!');
    } else {
      setOnBottom(false);
    }
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
          <div
            className="messages-container"
            id="chatbox"
            onScroll={handleScroll}
          >
            <Delay time={2000} display="typing...">
              <QuestionBox message={state.questionMessages.message1} />
            </Delay>

            {state.selectedOption === '' && (
              <>
                <Delay time={3000}>
                  <OptionBox option={state.selectionOptions.option1} />
                  <OptionBox option={state.selectionOptions.option2} />
                </Delay>
              </>
            )}
            <SelectionOption option={state.selectedOption} />
            {state.selectedOption === state.selectionOptions.option1 ? (
              <>
                <Delay time={500}>
                  <Delay time={1500} display="typing...">
                    <QuestionBox message={state.questionMessages.message2} />
                  </Delay>
                </Delay>
                <Delay time={3500}>
                  <Delay time={2000} display="typing...">
                    <QuestionBox message={state.questionMessages.message3} />
                  </Delay>
                </Delay>
                <Delay time={7500}>
                  <button
                    type="button"
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
              state.selectedOption !== '' && (
                <>
                  <Delay time={1500}>
                    <Delay time={3000} display="typing...">
                      <QuestionBox message={state.questionMessages.message6} />
                    </Delay>
                  </Delay>
                  <Delay time={7500}>
                    <Delay time={1500} display="typing...">
                      <QuestionBox message={state.questionMessages.message7} />
                    </Delay>
                  </Delay>
                  <Delay time={11000}>
                    <OptionBox option={state.selectionOptions.option3} />
                  </Delay>
                </>
              )
            )}
            {state.onSecondToLastSection && (
              <section
                className={
                  state.onLastSection
                    ? 'second-to-last-section-container'
                    : 'second-to-last-section-container--extended'
                }
              >
                <div className="question-box">
                  <Delay time={1500} display="typing...">
                    <QuestionBox message={state.questionMessages.message4} />
                  </Delay>
                </div>
                <Delay time={2500} display="">
                  <Carousel />
                </Delay>
              </section>
            )}
            {state.onLastSection && (
              <section className="last-section-container">
                <div className="question-box">
                  <Delay time={1500} display="typing...">
                    <QuestionBox message={state.questionMessages.message5} />
                  </Delay>
                </div>
                <Delay time={2500} display="">
                  <Recommendations />
                </Delay>

                <Delay time={4000} display="">
                  <div className="button-container">
                    <button>Contact Us</button>
                  </div>
                </Delay>
                <Delay time={5000} display="">
                  <div className="button-container">
                    <button>Visit Our Website</button>
                  </div>
                </Delay>
              </section>
            )}
          </div>
        </main>
        <footer>
          {state.onLastSection && onBottom ? (
            <div className="last-section-footer">
              <div className="last-section-footer--inner">
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
