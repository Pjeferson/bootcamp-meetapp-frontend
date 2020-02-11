import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { Container, ButtonEdit, ButtonDelete, Infos } from './styles';

export default function Details({ match }) {
  const meetup = useSelector(state =>
    state.meetup.meetups.find(m => m.id === Number(match.params.id))
  );
  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <Link to={`/meetups/${meetup.id}/edit`}>
            <ButtonEdit type="button">
              <MdEdit size={20} color="#fff" />
              Editar
            </ButtonEdit>
          </Link>
          <ButtonDelete type="button">
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </ButtonDelete>
        </div>
      </header>
      <img src={meetup.banner.url} alt="Banner" />
      <p>{meetup.description}</p>
      <Infos>
        <div>
          <MdEvent size={20} color="#fff" />
          {meetup.dateFormatted}
        </div>
        <div>
          <MdPlace size={20} color="#fff" />
          {meetup.location}
        </div>
      </Infos>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
