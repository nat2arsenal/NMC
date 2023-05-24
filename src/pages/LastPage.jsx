import { useContext } from 'react';
import { AppContext } from '../Context';
import QuestionBox from '../components/QuestionBox';
import Recommendations from '../components/Recommendations';

export default function LastPage() {
  const { questionMessages } = useContext(AppContext);

  return (
    <>
      <div className="last-page-container">
        <div className="question-box">
          <QuestionBox message={questionMessages.message5} />
        </div>
        <Recommendations />
      </div>
    </>
  );
}
