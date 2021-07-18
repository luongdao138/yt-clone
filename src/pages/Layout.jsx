import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SmallScreenNav from '../components/SmallScreenNav';

const Context = createContext();

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isSidebarOpen,
        openSidebar: () => setIsSidebarOpen(true),
        closeSidebar: () => setIsSidebarOpen(false),
        isSearchbarOpen,
        openSearchbar: () => setIsSearchbarOpen(true),
        closeSearchbar: () => setIsSearchbarOpen(false),
      }}
    >
      <Navbar />
      <Sidebar />
      <SmallScreenNav />
      <Wrapper>{children}</Wrapper>
    </Context.Provider>
  );
};

const Wrapper = styled.div`
  margin-left: 72px;
  margin-top: 56px;
  background-color: var(--primary-color);
  ::-webkit-scrollbar-track {
    background-color: var(--primary-color);
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-bottom: 56px;
  }
`;
export const useLayoutContext = () => useContext(Context);
export default Layout;
