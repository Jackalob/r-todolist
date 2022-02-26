import styled from 'styled-components';
import { FullContainer, StyledWrapper } from 'components/Globals'

export const FullBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor || '#212129' };
`

export const FullCenter = styled(FullContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItem = styled(StyledWrapper)`
  margin-bottom: 12px;
  min-height: 50px;
`

export const NewTodo = styled(StyledWrapper)`
  display: flex;
  justify-content: space-between;
  > input {
    border: none;
    background: transparent;
    color: #fff;
  }
  > input::placeholder {
    color: rgba(255, 255, 255, .5);
    letter-spacing: 1px;
  }
  > button {
    border: 1px solid rgba(255, 255, 255, .2);
    background: transparent;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 16px;
    color: #fff;
  }
`