import React from 'react';
import * as S from './Footer.styles';

const CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterText>&copy; {CurrentYear} 163254.com. All rights reserved.</S.FooterText>
      <S.FooterText>Made with Love by 곽승민6071 & Your Girlfriend 💕</S.FooterText>
    </S.FooterContainer>
  );
}

export default Footer;