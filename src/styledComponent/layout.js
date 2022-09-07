import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
`;

const AppWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
`;

export {AppContainer, AppWrap}