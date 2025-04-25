import Card from './Card/card.js';
import cards from './cards.json';

export const App = () => {
  const isOnline = true;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Card
        imgUrl={cards.word}
        word={cards[0].pt.word}
        rate={cards[0].rate}
      /> */}

      {isOnline &&
        <Card
        imgUrl={cards.word}
        word={cards[0].pt.word}
        rate={cards[0].rate}
      />
      }
      {!isOnline ?
        <Card
        imgUrl={cards.word}
        word={cards[0].pt.word}
        rate={cards[0].rate}
      />
      :
        <Card
        imgUrl={cards.word}
        word={cards[0].en.word}
        rate={cards[0].rate}
      />
      }
    </div>
  );
};
