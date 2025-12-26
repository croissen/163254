import * as S from "./Sell.styles";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goForm = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScZyZ7-R6dI39Lo0rKUIkkbX_tPN5EUK2l1bqvJ2CdXogES6A/viewform?usp=header";
  };
  const goHome = () => {
    navigate("/home");  
  };

  return (
    <S.Container>
      <S.Title>163254.com</S.Title>
      <div>
        <S.StartButton onClick={goForm}>
          5,000$ CAN BUY DOMAIN
        </S.StartButton>
        <S.StartButton onClick={goHome}>
          홈으로
        </S.StartButton>
      </div>
    </S.Container>
  );
}
