import React from 'react'
import Checkbox, { CheckboxLabel } from 'src/components/Checkbox';
import CountBadge from '../../../components/CountBadge';
import { ListItem, FlexCenter, FlexBlock, RemoveButton } from '../style';
import { ReactComponent as Icon } from 'src/assets/icons/trash-can-solid.svg'

export default function Todo({ todo, theme = '#045975', onChange, onDelete }) {
  const handleChange =  (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others })
  }
  const handleRemove = () => {
    onDelete(todo);
  }
  
  return (
    <ListItem>
      <FlexBlock>
        <Checkbox
          type="checkbox"
          defaultChecked={todo.done}
          onChange={handleChange}
        />
        <CheckboxLabel>{ todo.title }</CheckboxLabel>
      </FlexBlock>
      <FlexBlock>
        <FlexCenter onClick={handleRemove}>
          <RemoveButton>
            <Icon />
          </RemoveButton>
        </FlexCenter>
        <span>
          <CountBadge />
        </span>
      </FlexBlock>
    </ListItem>
  )
}
