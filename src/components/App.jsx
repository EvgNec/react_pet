import '../index.css';
import 'modern-normalize';
import cards from '../components/Words/cards.json';
import Section from './Section/Section.js';
import ListCard from 'components/Words/ListCard/ListCard.js';
import Cats from './Cats/App/Cat';
import { PageTitle } from './Icons/PageTitle/PageTitle';
import { EventBoard } from './Icons/EventBoard/EventBoard';
import eventsDate from './Icons/events.json';
import pilots from '../components/Pilot/pilots.json';
import { PilotList } from './Pilot/PilotList/PilotList';
import {ThemeProvider} from '@emotion/react';
import {theme}from '../constans';

export const App = () => {
  const visibleOff = true;
  return (
    <div>
      <Section title="Pilots" visible="false">
<PageTitle text="Best pilots of our galaxy!"/>
<PilotList items={pilots} />
</Section>
     {visibleOff && <Section title="Cats" visible="false">
        <Cats/>
      </Section>}
     {visibleOff && <Section title="Icons" visible="false">
        <PageTitle text="1 CORE WORLDS CONFERECE" />
        <ThemeProvider theme={theme}>
        <EventBoard events={eventsDate}/>
        </ThemeProvider>
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
