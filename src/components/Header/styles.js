import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 64px;
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 32px;
    width: 32px;
  }
  aside {
    display: flex;
    align-items: center;

    button {
      height: 35px;
      width: 70px;
      background: #d44059;
      border: none;
      border-radius: 4px;

      color: #fff;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;

  margin-right: 30px;

  strong {
    color: #fff;
  }

  a {
    margin-top: 5px;
    color: #999;
  }
`;
