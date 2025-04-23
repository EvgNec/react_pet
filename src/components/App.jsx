import Card from './Card/card.js';
import cards from './cards.json';

export const App = () => {
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
      React homework template
      <Card
        imgUrl={cards.pt.word}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats} />
    </div>
  );
};
