import styled from 'styled-components';
import tw from 'twin.macro';

export const Navbar = styled.nav`
  ${tw`flex items-center justify-between p-6 bg-primary-500 text-white`}
`;

export const Logo = styled.h1`
  ${tw`text-4xl`}
`;

export const ThemeSwitch = styled.button`
  ${tw`p-2 rounded-md bg-primary-300 text-primary-900`}
`;