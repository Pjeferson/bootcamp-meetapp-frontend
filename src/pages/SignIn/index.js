import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
