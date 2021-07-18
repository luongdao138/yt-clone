import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMic, MdMenu } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  background-color: var(--secondary-color);
  border-bottom: 1px solid var(--border-color);
`;

export const Content = styled.div`
  height: 56px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0 12px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SectionCenter = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Menu = styled(MdMenu)`
  color: var(--white-color);
  font-size: 24px;
  margin-right: 25px;
  cursor: pointer;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const Logo = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  padding-right: 20px;
`;

export const LogoIcon = styled.img`
  width: 28px;
`;

export const LogoText = styled.h1`
  color: var(--white-color);
  font-size: 20px;
  margin-left: 5px;
  font-weight: 600;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin-right: 16px;
`;

export const SearchInput = styled.input`
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  width: 100%;
  background-color: var(--primary-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(220 217 217);
  border: 1px solid var(--border-color);
  padding: 3px 12px;
  padding-right: 70px;
  &:focus {
    border: 1px solid #1277bf;
  }

  @media (max-width: 500px) {
    padding-right: 12px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  background-color: #313131;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  width: 58px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  color: var(--grey-color);
`;

export const Micro = styled(MdMic)`
  font-size: 24px;
  color: var(--white-color);
  cursor: pointer;
`;

export const BackToNav = styled(BsArrowLeft)`
  font-size: 24px;
  color: var(--white-color);
  margin-right: 16px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: block;
  font-size: 24px;
  color: var(--white-color);
  margin-left: 25px;
  display: ${({ disappear }) => (disappear ? 'none' : 'flex')};
  align-items: center;
  cursor: pointer;

  @media (max-width: 750px) {
    margin-left: 12px;
    display: ${({ resp }) => (resp ? 'none' : 'flex')};
  }

  @media (max-width: 450px) {
    margin-left: 12px;
  }
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 25px;
  @media (max-width: 450px) {
    margin-left: 12px;
  }
`;
