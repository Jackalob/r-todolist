import React from 'react'
import { getBlockGradient } from 'components/Globals'
import Checkbox, { CheckboxLabel } from 'components/Checkbox';
import CountBadge from '../../../components/CountBadge';
import { ListItem } from '../style';

export default function Todo({ todo, onChange, theme = '#045975' }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }

  return (
    <ListItem style={{ background: getBlockGradient(theme) }}>
      <Checkbox
        type="checkbox"
        defaultChecked={todo.done}
        onChange={handleChange}
      />
      <CheckboxLabel>{ todo.title }</CheckboxLabel>
      <span>remove button</span>
      <span>
        <CountBadge />
      </span>
    </ListItem>
  )
}
