import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
import ImageInput from '../ImageInput';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

export default function MeetupCreate() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
