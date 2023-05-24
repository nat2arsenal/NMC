import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function SelectionOption({ option }) {
  const { selectedOption } = useContext(AppContext);

  return (
    <>
      {selectedOption === '' ? null : (
        <div className="selection-option-container">{option}</div>
      )}
    </>
  );
}

SelectionOption.propTypes = {
  option: PropTypes.node,
};