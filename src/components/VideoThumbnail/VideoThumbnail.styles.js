import styled from 'styled-components';

export const Wrapper = styled.div`
  iframe {
    height: 400px;

    @media (max-width: 650px) {
      height: 250px;
    }

    @media (max-width: 450px) {
      height: 190px;
    }
  }
`;
