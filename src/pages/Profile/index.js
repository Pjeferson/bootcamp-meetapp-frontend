import React from 'react';
import {MdAddCircleOutline} from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <input name="name" type="text" placeholder="Seu nome"/>
      <input name="email" type="email" placeholder="Seu e-mail"/>
      <hr />
      <input name="oldPassword" type="password" placeholder="Senha atual" />
      <input name="password" type="password" placeholder="Nova senha"/>
      <input name="confirmPassword" type="password" placeholder="Confirmação de senha"/>
      <button type="submit">
        <MdAddCircleOutline size={20} color="#fff"/>
        Salvar perfil
      </button>
    </Container>
  );
}
