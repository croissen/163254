// src/pages/Home.styles.js
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #F9F7F5; /* 따뜻한 웜 화이트 배경 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard', sans-serif; /* 프리텐다드 폰트 적용 */
  color: #4A4A4A; /* 전체적인 글자색도 따뜻한 다크 그레이로 */
  text-align: center;
  padding: 20px; /* 좌우 여백 */
`;

export const Title = styled.h1`
  font-size: 3.5em; /* 좀 더 크게 강조! */
  margin-bottom: 15px;
  color: #2c3e50; /* 헤더 텍스트 색과 비슷하게 맞춰봤어 */
  font-weight: 700; /* 좀 더 굵게 */
  line-height: 1.2;
`;

export const SubTitle = styled.p`
  font-size: 1.3em;
  color: #7F8C8D; /* 부드러운 회색 */
  margin-bottom: 30px;
  max-width: 600px; /* 너무 길어지지 않게 */
  line-height: 1.6;
`;

export const StartButton = styled.button`
  margin-top: 30px;
  padding: 15px 30px; /* 버튼 패딩 조금 더 넉넉하게 */
  border-radius: 30px;
  border: none;
  background-color: #C9A7B3; /* 더스티 로즈 (말린 장미색) */
  color: white;
  font-size: 1.1em; /* 폰트 사이즈 키우기 */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 호버 효과 부드럽게 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */

  &:hover {
    background-color: #B595A0; /* 호버 시 약간 진한 더스티 로즈 */
    transform: translateY(-2px); /* 살짝 위로 뜨는 효과 */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;