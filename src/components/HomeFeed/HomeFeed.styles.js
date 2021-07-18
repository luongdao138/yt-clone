import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px;
  min-height: calc(100vh - 112px);

  @media (max-width: 500px) {
    padding: 0px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  column-gap: 16px;
  row-gap: 28px;

  @media (max-width: 450px) {
    row-gap: 12px;
  }
`;
