import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      height: 50px;
      border-radius: 4px;
      padding: 0 20px;
      font-size: 18px;
      color: #fff;
      margin-bottom: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      color: #d44059;
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      width: 100%;
      height: 50px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin-top: 5px;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    a {
      margin-top: 20px;
      font-size: 16px;
      color: #999;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
