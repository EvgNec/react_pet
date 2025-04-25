import Card from '../Card/Card';
 
 function  ListCard  ({ cards }){
    return (
<ul>
    {cards.map( (card) => (
        <li   key={card.id}> 
                    <Card                   
                    imgUrl={card.word}
                    word={card.pt.word}
                    rate={card.rate}
                  />
        </li>
    )
    
    )}
</ul>
);
 }


export default  ListCard; 