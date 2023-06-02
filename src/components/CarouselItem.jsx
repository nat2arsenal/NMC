import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function CarouselItem({ item }) {
  // const { setOnLastPage } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: 'LAST_SECTION' });
    const element = document.getElementById('chatbox');
    setTimeout(() => element.scrollTo(0, 688), 50);
  };

  return (
    <>
      <button className="carousel-item" onClick={handleClick}>
        <img src={item.image} alt={item.description} />
        <div className="divider"></div>
        <div className="caption">{item.description}</div>
      </button>
    </>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.object,
};
