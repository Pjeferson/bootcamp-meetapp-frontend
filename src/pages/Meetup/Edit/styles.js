import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 50px 0;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 10px;
      height: 50px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 18px;
      padding: 15px 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      margin-bottom: 10px;
      height: 200px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 18px;
      padding: 15px 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    button {
      margin-top: 10px;
      align-self: flex-end;
      display: flex;
      align-items: center;
      padding: 10px 20px;
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
  }
`;
