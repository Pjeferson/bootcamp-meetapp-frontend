import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: auto;
  padding: 50px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
      color: #fff;
    }

    button {
      min-height: 42px;
      min-width: 172px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 10px 20px;

      color: #fff;
      font-size: 16px;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    margin-top: 50px;
  }
`;

export const Appointment = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 20px 20px 20px 30px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 16px;
      color: #fff;
    }

    span {
      font-size: 16px;
      color: #fff;
      opacity: 0.6;
    }
  }

  button {
    background: none;
    border: 0;

    height: 24px;
    width: 24px;
    margin-left: 30px;
  }

  li + & {
    margin-top: 10px;
  }
`;
