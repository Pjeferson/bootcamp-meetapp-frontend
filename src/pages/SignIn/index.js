import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <form action="">
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </>
  );
}
