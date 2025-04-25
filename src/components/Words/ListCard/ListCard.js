import Card from '../Card/Card';
import PropTypes from 'prop-types';

function ListCard({ cards }) {
  return (
    <ul>
      {cards.map(card => (
        <li key={card.id}>
          <Card imgUrl={card.word} word={card.pt.word} rate={card.rate} />
        </li>
      ))}
    </ul>
  );
}

ListCard.prototypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ListCard;
