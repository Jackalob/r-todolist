import styled from 'styled-components';
import {
  FullContainer,
  StyledWrapper,
  FlexRow,
} from 'src/components/Globals';

export const FullHeight = styled.div`
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

export const RemoveButton = styled.button`
  width: 22px;
  height: 22px;
  background: transparent;
  color: #333;
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease-in-out;
  border: 0;
  padding: 0;
  fill: #C4DBEB;
  cursor: pointer;
  > svg {
    width: 100%;
    height: 100%;
  }
`

export const ListItem = styled(StyledWrapper)`
  background-color: rgba(0, 0, 0, .1);
  margin-bottom: 12px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  &:hover ${RemoveButton}{
    opacity: 1;
    visibility: visible;
  }
`

export const FlexCenter = styled(FlexRow)`
  align-items: center;
`

export const TodoListTitle = styled.p`
  margin-bottom: 12px;
  color: #fff;
`

export const FlexBlock = styled(FlexCenter)`
  > div, span, input {
    margin-right: 8px;
    &: last-child {
      margin: 0;
    }
  }
`

export const NewTodo = styled(StyledWrapper)`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .1);
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