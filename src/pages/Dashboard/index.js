import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Appointment } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/organizing');
      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircleOutline color="#fff" size={20} />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Appointment key={meetup.id}>
            <div>
              <strong>{meetup.title}</strong>
              <span>{meetup.dateFormatted}</span>
            </div>
            <button type="button">
              <MdChevronRight size={24} color="#fff" />
            </button>
          </Appointment>
        ))}
      </ul>
    </Container>
  );
}
