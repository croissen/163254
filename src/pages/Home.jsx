import * as S from "./Home.styles";

export default function Home() {
  const goForm = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScZyZ7-R6dI39Lo0rKUIkkbX_tPN5EUK2l1bqvJ2CdXogES6A/viewform?usp=header";
  };

  return (
    <S.Container>
      <S.Title>163254.com</S.Title>
      <S.StartButton onClick={goForm}>
        5,000$ CAN BUY DOMAIN
      </S.StartButton>
    </S.Container>
  );
}
