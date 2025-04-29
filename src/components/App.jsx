import '../index.css';
import 'modern-normalize';
import cards from '../components/Words/cards.json';
import Section from './Section/Section.js';
import ListCard from 'components/Words/ListCard/ListCard.js';
import Cats from './Cats/App/Cat';
import { PageTitle } from './Icons/PageTitle/PageTitle';
import { EventBoard } from './Icons/EventBoard/EventBoard';
import eventsDate from './Icons/events.json';

export const App = () => {
  const visibleOff = false;
  return (
    <div>
      <Section title="Cats" visible="false">
        <Cats/>
      </Section>
     {visibleOff && <Section title="Icons" visible="false">
        <PageTitle text="1 CORE WORLDS CONFERECE" />
        <EventBoard events={eventsDate}/>
      </Section>}
      {visibleOff && <Section title="Words">
        <ListCard cards={cards} />
      </Section>}
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
