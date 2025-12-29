import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styles';

function Header() {
  return (
    <S.HeaderContainer>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <S.SiteTitle>
            <S.GreenNumber>1</S.GreenNumber>
            <S.PinkNumber>6</S.PinkNumber>
            <S.GreenNumber>3</S.GreenNumber>
            <S.PinkNumber>2</S.PinkNumber>
            <S.GreenNumber>5</S.GreenNumber>
            <S.PinkNumber>4</S.PinkNumber>
          </S.SiteTitle>
        </Link>
      </div>
      <S.Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/youtube">YouTube</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </S.Nav>
    </S.HeaderContainer>
  );
}

export default Header;