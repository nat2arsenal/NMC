import { useContext } from 'react';
import { AppContext } from '../Context';

export default function Recommendations() {
  const { selectedOption, selectionOptions } = useContext(AppContext);

  return (
    <>
      <div className="recommendations-component">
        {selectedOption === selectionOptions.option3 ? (
          <>
            <img src="./src/assets/Images/carousel-bg.jpg" alt="bg-image" />
            <div className="recommendation-2">
              <p>Courses do not change behaviours and attitudes.</p>
              <h1>Out Learning Campaigns do!</h1>
              <div className="book-now--container">
                <button className="book-now--button">
                  <p>BOOK NOW</p>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src="./src/assets/Images/carousel-bg.jpg" alt="bg-image" />
            <div className="recommendation-1">
              <h2>We Can Change</h2>
              <h2>Your Employees&apos; Business Ehics in</h2>
              <div className="book-now--container">
                <img src="./src/assets/Images/9-1.webp" alt="9-minutes-icon" />
                <div className="book-now--text">
                  <h2>PER WEEK</h2>
                  <button className="book-now--button">
                    <p>BOOK NOW</p>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
