import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppContext } from '../Context';
import SelectionOption from './SelectionOption';

export default function OptionBox({ option }) {
  // const { setSelectedOption, selectionOptions, setOnLastPage } =
  //   useContext(AppContext);

  const { state, dispatch } = useContext(AppContext);
  const [option3Clicked, setOption3Clicked] = useState(false);

  const handleSelect = () => {
    if (option === state.selectionOptions.option3) {
      dispatch({ type: 'LAST_SECTION' });
      setOption3Clicked(true);
      const element = document.getElementById('chatbox');
      setTimeout(() => element.scrollTo(0, 688), 500);
    } else {
      dispatch({ type: 'SELECT_OPTION', payload: option });
    }
  };

  return (
    <>
      {option3Clicked ? (
        <SelectionOption option={state.selectionOptions.option3} />
      ) : (
        <button
          type="button"
          className="option-box-container"
          onClick={handleSelect}
        >
          {option}
        </button>
      )}
    </>
  );
}

OptionBox.propTypes = {
  option: PropTypes.string.isRequired,
};
