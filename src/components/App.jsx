import SectionWords from './Words/ListCard/ListCard.js';
import cards from '../components/Words/cards.json';


export const App = () => {
  return (
    <div>
           <SectionWords title="Words Card" cards={cards}/> 
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
