import { useContext } from 'react';
import { AppContext } from '../Context';
import QuestionBox from '../components/QuestionBox';
import Recommendations from '../components/Recommendations';
import Delay from '../components/Delay';

export default function LastPage() {
  const { questionMessages } = useContext(AppContext);

  return (
    <>
      <div className="last-page-container">
        <div className="question-box">
          <Delay time={1500} display="typing...">
            <QuestionBox message={questionMessages.message5} />
          </Delay>
        </div>
        <Delay time={2500} display="">
          <Recommendations />
        </Delay>
      </div>
    </>
  );
}
