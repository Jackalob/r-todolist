import React, { useState } from 'react'
import { FullBg, FullCenter } from './style'
import { getGradient } from 'components/Globals'
import Header from 'components/Header'
import RoundCard from 'components/Card'
import ColorPicker from 'components/ColorPicker'
import { BlockWrapper } from 'components/Globals'
import Select from 'components/Select'
import TodoList from './components/TodoList'

export default function BlazingTodoList() {
  const [theme, setTheme] = useState('#045975')
  const [visibleType, setVisibleType] = useState('all');

  return (
    <FullBg>
      <FullCenter>
        <RoundCard style={{ background: getGradient(theme) }}>
          <Header>
            <ColorPicker setTheme={setTheme} />
            <BlockWrapper size='small' style={{ background: getGradient(theme) }}>
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
          </Header>
          <TodoList visibleType={visibleType} theme={theme} />
        </RoundCard>
      </FullCenter>
    </FullBg>
  )
}
