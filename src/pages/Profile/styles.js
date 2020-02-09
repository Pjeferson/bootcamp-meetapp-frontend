import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  hr {
    margin: 10px 0 20px;
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  input {
    height: 50px;
    border: 0;
    margin-bottom: 10px;
    padding: 15px 20px;

    background: rgba(0, 0, 0, 0.2);
    font-size: 18px;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 42px;
    width: 162px;
    padding: 10 20px;
    background: #f94d6a;
    border: 0;
    border-radius: 4px;

    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background: ${darken(0.03, '#F94D6A')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
