import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 500px) {
    padding: 0;
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
    margin-right: 50px;
    padding: 0 10px;
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
    padding: 0 10px;
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

    @media (max-width: 750px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const SmallScreenIconWrapper = styled.div`
  border-bottom: 1px solid #9090903b;
  color: var(--white-color);

  @media (max-width: 500px) {
    padding: 0 10px;
  }

  @media (min-width: 501px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 10px 0;
  height: 100%;
`;

export const SmallIcon = styled.button`
  /* display: flex;
  flex-direction: column; */
  display: block;
  color: var(--white-color);
  background-color: var(--primary-color);
  padding: 6px 25px;

  svg {
    font-size: 18px;
    color: var(--white-color);
  }
`;

export const HideDesc = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 65px;
  z-index: 5;
  cursor: pointer;

  @media (min-width: 450px) {
    display: none;
  }
`;

export const IconShowDesc = styled.span`
  position: absolute;
  top: 0px;
  right: 8px;
  color: var(--white-color);
`;

export const VideoDescModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 250px;
  background-color: var(--primary-color);
  z-index: 50;
`;
