import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../Context';

export default function CarouselItem({ item }) {
  const { setOnLastPage } = useContext(AppContext);

  return (
    <div className="carousel-item" onClick={() => setOnLastPage(true)}>
      <img src={item.image} alt={item.description} />
      <div className="divider"></div>
      <div className="caption">{item.description}</div>
    </div>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.node,
};
