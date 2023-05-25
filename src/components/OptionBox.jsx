import PropTypes from 'prop-types';
import REACT from 'react';
import { AppContext } from '../Context';

export default function OptionBox({ option }) {
  const { setSelectedOption, selectionOptions, setOnLastPage } =
    REACT.useContext(AppContext);

  const handleSelect = () => {
    setSelectedOption(option);
    if (option === selectionOptions.option3) {
      setOnLastPage(true);
    }
  };

  return (
    <>
      <button className="option-box-container" onClick={handleSelect}>
        {option}
      </button>
    </>
  );
}

OptionBox.propTypes = {
  option: PropTypes.node,
};
