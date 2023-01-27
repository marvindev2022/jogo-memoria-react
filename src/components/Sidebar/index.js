import "./style.css";
import logo from "../../assets/Logo.svg";

export default function Sidebar({ cards, setStateCards }) {
  const handleReset = () => {
    cards.forEach((card) => {
      card.turned = false;
    });
    setStateCards(cards);
  };
  return (
    <div className="sidebar">
      <div className="puzzle">
        <img src={logo} alt="Logo" />
      </div>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
}


