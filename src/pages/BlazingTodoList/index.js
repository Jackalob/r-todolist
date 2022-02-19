import React, { useState } from 'react'
import ColorPicker from '../../components/ColorPicker'
import Select from '../../components/Select'
import TodoList from './components/TodoList'
export default function BlazingTodoList() {
  const [theme, setTheme] = useState('#333333')
  const [visibleType, setVisibleType] = useState('all');
  return (
    <div>
      <div>
        <header>
          <ColorPicker />
          <div>
            <Select
              visibleType={visibleType}
              onChange={value => setVisibleType(value)}
              options={[
                { id: 1, value: 'all', label: 'All' },
                { id: 2, value: 'active', label: 'Active' },
                { id: 3, value: 'completed', label: 'Completed' },
              ]}
            />
          </div>
        </header>
        <TodoList visibleType={visibleType} />
      </div>
    </div>
  )
}
