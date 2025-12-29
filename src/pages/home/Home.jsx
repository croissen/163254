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
        여자친구와 함께하는 유튜버 활동, 맛있는 요리 비법, 그리고 우리가 직접 써보고 고른 <br />
        라이프스타일 아이템까지, 
        모든 것을 이곳에서 만나보세요!
      </S.SubTitle>
      <S.StartButton onClick={() => window.location.href = '/home'}>
        우리 이야기 시작하기 🚀
      </S.StartButton>
    </S.Container>
  );
}