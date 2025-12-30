import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styles';

function Header() {
  return (
    <S.HeaderContainer>
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
      <S.Nav>
        <ul>
          <li><Link to="/album">ALBUM</Link></li>
          <li><Link to="/style">STYLE</Link></li>
          <li><Link to="/music">MUSIC</Link></li>
          <li><Link to="/recipe">RECIPE</Link></li>
          <li><Link to="/lab">LAB</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </S.Nav>
      <div style={{ width: "120px" }} />
    </S.HeaderContainer>
  );
}

export default Header;