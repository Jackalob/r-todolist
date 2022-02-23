import React, { useState } from 'react'
import ColorPicker from 'components/ColorPicker'
import BlockWrapper from 'components/BlcokWrapper'
import Select from 'components/Select'
import TodoList from './components/TodoList'

export default function BlazingTodoList() {
  const [theme, setTheme] = useState('#045975')
  const [visibleType, setVisibleType] = useState('all');

  const bgGradient = `linear-gradient(
    289.21deg,
    rgb(8, 126, 164) 13.57%,
    ${theme} 98.38%
  )`;

  return (
    <div>
      <div style={{ background: bgGradient }}>
        <header>
          <ColorPicker setTheme={setTheme} />
          <BlockWrapper size='small' style={{ background: bgGradient }}>
            <Select
              visibleType={visibleType}
              onChange={value => setVisibleType(value)}
              options={[
                { id: 1, value: 'all', label: 'All' },
                { id: 2, value: 'active', label: 'Active' },
                { id: 3, value: 'completed', label: 'Completed' },
              ]}
            />
          </BlockWrapper>
        </header>
        <TodoList visibleType={visibleType} theme={theme} />
      </div>
    </div>
  )
}
