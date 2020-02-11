import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Appointment } from './styles';

import { loadMeetupsRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(loadMeetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/meetups/create">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={20} />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Appointment key={meetup.id}>
            <div>
              <strong>{meetup.title}</strong>
              <span>{meetup.dateFormatted}</span>
            </div>
            <Link to={`/meetups/${meetup.id}`}>
              <button type="button">
                <MdChevronRight size={24} color="#fff" />
              </button>
            </Link>
          </Appointment>
        ))}
      </ul>
    </Container>
  );
}
