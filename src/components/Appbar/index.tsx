import React, {FC} from 'react';
import {Navbar, Logo, ThemeSwitch} from './styles';


const Appbar: FC = () => {
  return (
    <Navbar>
      <Logo>Arxiv Trends</Logo>
      <ThemeSwitch>Switch Theme</ThemeSwitch>
    </Navbar>
  );
};

export default Appbar;
