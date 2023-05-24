import { useContext } from 'react';
import { AppContext } from '../Context';
import QuestionBox from '../components/QuestionBox';
import Carousel from '../components/Carousel';

export default function SecondToLastPage() {
  const { questionMessages } = useContext(AppContext);

  return (
    <>
      <div className="last-page-container">
        <div className="question-box">
          <QuestionBox message={questionMessages.message4} />
        </div>
        <Carousel />
      </div>
    </>
  );
}
