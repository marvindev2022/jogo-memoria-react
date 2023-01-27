import "./style.css";
import cardBack from "../../assets/card-back.png";

 function handleTurnCard(card,stateCards,setStateCards,) {
   const localCards = [...stateCards];

   const cardClicked = localCards.find((element) => element.id === card.id);
   const cardSelecteds = localCards.filter((carta) => carta.turned === true);

   if (cardSelecteds.length >= 2) return;

   if (cardSelecteds.length > 0 && card.id === cardSelecteds[0].id) return;

   if (cardSelecteds.length && card.slug === cardSelecteds[0].slug) {
     cardClicked.turned = !cardClicked.turned;
     setStateCards(localCards);
     handleGotCards(setStateCards,cardClicked, cardSelecteds[0], localCards);
     return;
   }

   cardClicked.turned = !cardClicked.turned;
   setStateCards(localCards);

   if (cardSelecteds.length) {
     setTimeout(() => {
       localCards.forEach((element) => (element.turned = false));
       setStateCards([...localCards]);
     }, 1000);
   }
 };

function handleGotCards (setStateCards,card1, card2, localCards)  {
  setTimeout(() => {
    const rightCars = localCards.filter((element) => {
      return element.id !== card1.id && element.id !== card2.id
    });
    setStateCards(rightCars);
  }, 800);
};

export default function Card({ card, stateCards, setStateCards }) {
  return (
    <img
      onClick={() => handleTurnCard(card, stateCards, setStateCards)}
      className="img-card"
      key={card.id}
      src={card.turned ? card.image : cardBack}
      alt= {card.nome}
    />
  );
}


