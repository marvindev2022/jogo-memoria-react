import "./style.css";
import { useState } from "react";
import cards from "../../cards";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import winner from "../../assets/congrats.png";

export default  function Main() {
  cards.sort(() => Math.random() - 0.5);
  const [stateCards, setStateCards] = useState([...cards]);
  return (
    <div className="container">
      <Sidebar cards={cards} setStateCards={setStateCards} />
      <div
        className={`container-cards ${stateCards.length === 0 ? "venceu" : ""}`}
      >
        {stateCards.length > 0 ? (
          stateCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              stateCards={stateCards}
              setStateCards={setStateCards}
            />
          ))
        ) : (
          <img src={winner} alt="Congrats" />
        )}
      </div>
    </div>
  );
}


