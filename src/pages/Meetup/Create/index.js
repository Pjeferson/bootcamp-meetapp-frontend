import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { Container } from './styles';
import ImageInput from '../ImageInput';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  file_id: Yup.number().required('Selecione um banner para seu Meetup'),
  title: Yup.string().required('Dê um título ao seu Meetup'),
  description: Yup.string().required('Descreva o seu Meetup'),
  date: Yup.string().required('Defina uma data para o Meetup'),
  location: Yup.string().required('Defina o endereço do Meetup'),
});

export default function MeetupCreate() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="file_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Textarea name="description" placeholder="Descrição completa" />
        <Input name="date" type="text" placeholder="Data do Meetup" />
        <Input name="location" type="text" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Criar meetup
        </button>
      </Form>
    </Container>
  );
}
