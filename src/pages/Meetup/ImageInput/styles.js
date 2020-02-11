import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 300px;
  background: rgba(0, 0, 0, 0.4);

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 940px;
      height: 300px;

      object-fit: cover;
      border-radius: 4px;
    }

    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;

      background: 0;
      color: #fff;
      font-size: 20px;

      opacity: 0.3;
    }

    input {
      display: none;
    }
  }
`;
