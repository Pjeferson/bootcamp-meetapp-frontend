import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <img src={logo} alt="MeetApp" />
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
