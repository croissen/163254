import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #ffb6c1, #ffd6e8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: #555;
`;

export const StartButton = styled.button`
  margin-top: 30px;
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  background: hotpink;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
