import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function SelectionOption({ option }) {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.selectedOption === '' ? null : (
        <div className="selection-option-container">
          <div className="inner">{option}</div>
        </div>
      )}
    </>
  );
}

SelectionOption.propTypes = {
  option: PropTypes.node,
};
