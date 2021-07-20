import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 60px;
`;

export const Content = styled.div`
  padding: 12px;
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40x;
  padding: 16px 8px 8px 8px;
  display: flex;
  justify-content: space-between;
  color: var(--white-color);
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
  h4 {
    font-weight: 400;
    font-weight: 14px;
  }

  svg {
    cursor: pointer;
    font-size: 24px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--white-color);
`;
export const Stats = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9090903b;
  margin-bottom: 15px;
`;
export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: var(--white-color);

  p {
    font-weight: 600;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: var(--grey-color);
  }
`;

export const Description = styled.div`
  color: var(--white-color);
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 15px;
`;
