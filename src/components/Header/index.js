import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="MeetApp" />
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <button type="button" onClick={handleLogout}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
