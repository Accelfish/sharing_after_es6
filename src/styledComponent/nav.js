import styled from 'styled-components';

const NavContainer = styled.nav`
  position: sticky;
  top:0;
`;

const NavList = styled.ul`
  margin:0;
  display:flex;
`;

const NavItem = styled.li`
  list-style: none;
  color: #fff;
  margin-right: 10px;
  font-size: 20px;
  a {
    padding:3px;
    text-decoration: none;
  }
  
  a:visited{
    color: #fff;
  }
  
  a.active {
    background-color: #ff0;
    color: #000;
  }
`;

export {NavContainer, NavList, NavItem};