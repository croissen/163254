import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #F9F7F5;
  color: #4A4A4A;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-family: 'Pretendard', sans-serif;
  border-bottom: 1px solid #F0EFEA;
`;

export const SiteTitle = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin: 0;
  color: #7C6A64;
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const GreenNumber = styled.span`
  color: #9CB4A6;
`;

export const PinkNumber = styled.span`
  color: #C9A7B3;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 25px;
  }

  a {
    color: #4A4A4A;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.05em;
    padding: 5px 0;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -3px;
      left: 0;
      background-color: #C9A7B3;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }

    &:hover:before {
      width: 100%;
      visibility: visible;
    }

    &:hover {
      color: #C9A7B3;
    }
  }
`;