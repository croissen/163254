// src/pages/Home.jsx
import * as S from "./Home.styles";

export default function Home() {
  return (
    <S.Container>
      <S.Title>
        우리들의 특별한 이야기,<br />
        163254.com 에 오신 걸 환영해요!
      </S.Title>
      <S.SubTitle>
        
        모든 것을 이곳에서 만나보세요!
      </S.SubTitle>
      <S.StartButton onClick={() => window.location.href = '/home'}>
        우리 이야기 시작하기 🚀
      </S.StartButton>
    </S.Container>
  );
}