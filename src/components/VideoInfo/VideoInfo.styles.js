import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    padding: 0 0px;
  }
`;

export const Title = styled.p`
  color: var(--white-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  margin-top: 16px;
  @media (max-width: 500px) {
    margin-top: 8px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Divider = styled.div`
  margin: 0 5px;
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  background-color: var(--grey-color);
  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

export const InfoText = styled.span`
  color: var(--grey-color);
  font-size: 14px;
  @media (max-width: 700px) {
    display: ${({ disappear }) => (disappear ? 'none' : 'inline')};
  }

  @media (max-width: 500px) {
    display: inline;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9090903b;
  @media (max-width: 500px) {
    border-bottom: none;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Icon = styled.li`
  display: flex;
  align-items: center;
  color: var(--grey-color);
  padding: 0 12px;
  padding-bottom: 12px;
  text-transform: uppercase;
  border-bottom: ${({ border }) =>
    border ? '2px solid var(--grey-color)' : 'none'};
  svg {
    font-size: ${({ fontsize }) => fontsize};
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

// export const SmallScreenIconWrapper = styled.div`
//   width: 100%;
//   padding: 10px 0;
//   border-bottom: 1px solid #9090903b;
//   overflow-x: auto;
// `;

// export const SmallIcon = styled.div`
//   width: 100px;
// `;

export const SmallScreenIconWrapper = styled.div`
  border-bottom: 1px solid #9090903b;
  padding: 10px 0;
  color: var(--white-color);

  @media (min-width: 501px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  height: 100%;
`;

export const SmallIcon = styled.button`
  display: block;
  color: var(--white-color);
  background-color: var(--primary-color);
  padding: 6px 25px;

  :first-child {
    padding-left: 10px;
  }

  svg {
    font-size: 18px;
    color: var(--white-color);
  }
`;
