import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid #313131;
  padding: 0px 19px;
  height: 56px;
  color: var(--white-color);
  /* overflow-x: auto; */
  background-color: var(--secondary-color);

  @media (max-width: 450px) {
    padding: 0 7px;
  }
`;

export const Content = styled.div`
  display: flex;
  /* padding: 12px 0; */
  align-items: center;
  overflow-x: auto;
  height: 100%;
`;

export const Tag = styled.button`
  display: block;
  color: var(--white-color);
  border: 1px solid #545454;
  border-radius: 40px;
  background-color: #393939;
  padding: 6px 12px;
  margin: 0 5px;
`;
