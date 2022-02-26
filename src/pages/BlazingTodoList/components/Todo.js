import React from 'react'
import { getBlockGradient } from 'components/Globals'
import CountBadge from '../../../components/CountBadge';
import { ListItem } from '../style';

export default function Todo({ todo, onChange, theme = '#045975' }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }

  return (
    <ListItem style={{ background: getBlockGradient(theme) }}>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={handleChange}
      />
      <span>{ todo.title }</span>
      <span>remove button</span>
      <span>
        <CountBadge />
      </span>
    </ListItem>
  )
}
