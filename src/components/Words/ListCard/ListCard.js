import Card from '../Card/Card';
 
 function  ListCard  ({ cards }){
<ul>
    {cards.map( (card, index) => (
        <li   key={index}> 
                    <Card                   
                    imgUrl={card.word}
                    word={card.pt.word}
                    rate={card.rate}
                  />
        </li>
    )
    
    )}
</ul>
 }


export default  ListCard; 