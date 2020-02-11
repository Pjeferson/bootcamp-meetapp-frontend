import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
      align-items: center;
    }
  }

  img {
    margin-top: 50px;
    align-self: center;

    width: 940px;
    height: 300px;
    object-fit: cover;

    background: #d8d8d8;
    border-radius: 4px;
  }

  p {
    margin-top: 25px;
    color: #fff;
    font-size: 18px;
  }
`;

export const ButtonEdit = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  background: #4dbaf9;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  svg {
    margin-right: 10px;
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;

  margin-left: 10px;
  background: #d44059;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  svg {
    margin-right: 10px;
  }
`;

export const Infos = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  div {
    margin-right: 30px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    opacity: 0.6;

    svg {
      margin-right: 10px;
    }
  }
`;
