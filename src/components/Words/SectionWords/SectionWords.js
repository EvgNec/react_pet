import ListCard from '../ListCard/ListCard';
import PropTypes from 'prop-types';

function SectionWords({ title, cards }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ListCard cards={cards} />
    </div>
  );
}
SectionWords.prototypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default SectionWords;
