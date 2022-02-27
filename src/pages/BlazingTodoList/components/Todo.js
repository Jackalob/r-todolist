import React from 'react'
import { getBlockGradient } from 'src/components/Globals'
import Checkbox, { CheckboxLabel } from 'src/components/Checkbox';
import CountBadge from '../../../components/CountBadge';
import { ListItem, FlexCenter, RemoveButton } from '../style';

export default function Todo({ todo, onChange, theme = '#045975' }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }

  return (
    <ListItem style={{ background: getBlockGradient(theme) }}>
      <FlexCenter>
        <Checkbox
          type="checkbox"
          defaultChecked={todo.done}
          onChange={handleChange}
        />
        <CheckboxLabel>{ todo.title }</CheckboxLabel>
      </FlexCenter>
      <FlexCenter>
        <span>
          <RemoveButton></RemoveButton>
        </span>
        <span>
          <CountBadge />
        </span>
      </FlexCenter>
    </ListItem>
  )
}
