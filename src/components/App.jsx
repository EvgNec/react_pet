import cards from '../components/Words/cards.json';
import Section from './Section/Section.js';
import ListCard from 'components/Words/ListCard/ListCard.js';
import { PageTitle } from './Icons/PageTitle/PageTitle';

export const App = () => {
  return (
    <div>
      <Section title="Icons" visible="false">
        <PageTitle text="Test" />
      </Section>
      <Section title="Words">
        <ListCard cards={cards} />
      </Section>
    </div>
  );
};

// export const App = () => {
//   const isOnline = true;
//   return (
//     <div
//       // style={{
//       //   height: '100vh',
//       //   display: 'flex',
//       //   justifyContent: 'center',
//       //   alignItems: 'center',
//       //   fontSize: 40,
//       //   color: '#010101'
//       // }}
//     >
//     {isOnline && 'Online'}
//     {isOnline ? 'Online' : 'Offline'}
//       {/* <Card
//         imgUrl={cards.word}
//         word={cards[0].pt.word}
//         rate={cards[0].rate}
//       /> */}

//         <ListCard cards={cards}
//       />

//     </div>
//   );
// };
