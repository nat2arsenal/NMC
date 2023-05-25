import { useContext } from 'react';
import { AppContext } from '../Context';
import QuestionBox from '../components/QuestionBox';
import Carousel from '../components/Carousel';
import Delay from '../components/Delay';

export default function SecondToLastPage() {
  const { questionMessages } = useContext(AppContext);

  return (
    <>
      <div className="second-to-last-page-container">
        <div className="question-box">
          <Delay time={1500} display="typing...">
            <QuestionBox message={questionMessages.message4} />
          </Delay>
        </div>
        <Delay time={2500} display="">
          <Carousel />
        </Delay>
      </div>
    </>
  );
}
