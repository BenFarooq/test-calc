import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 460px;
  padding: 32px 32px 28px;
  box-sizing: border-box;

  border-radius: 16px;
  background: #ffffff;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  background: #eeeeee;
  border: none;

  border-radius: 8px;

  &[aria-label='sum'] {
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: 42px;

  & > ${Input}, span {
    width: 77px;
    height: 72px;
    margin: 0;
    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 40px;
  column-gap: 32px;
`;
