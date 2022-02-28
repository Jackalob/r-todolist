import React, { useRef, useState } from 'react'
import { getGradient, FlexCol } from 'src/components/Globals'
import Header from 'src/components/Header'
import RoundCard from 'src/components/Card'
import ColorPicker from 'src/components/ColorPicker'
import { BlockWrapper } from 'src/components/Globals'
import Select from 'src/components/Select'
import TodoList from './components/TodoList'
import { FullHeight, FullCenter, FlexBlock, TodoListTitle } from './style'

export default function BlazingTodoList() {
  const [theme, setTheme] = useState('#045975')
  const [visibleType, setVisibleType] = useState('all');
  // const renderTimes = useRef(0)
  return (
    <FullHeight>
      <FullCenter>
        <FlexCol>
          {/* <TodoListTitle>
            <code>
              getFiltered() was called { renderTimes.current++ } times
            </code>
          </TodoListTitle> */}
          <RoundCard style={{ background: getGradient(theme) }}>
            <Header>
              <FlexBlock>
                <ColorPicker
                  theme={theme}
                  onChange={(e) => setTheme(e.target.value)}
                />
                <span />
              </FlexBlock>
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
            <TodoList visibleType={visibleType} />
          </RoundCard>
        </FlexCol>
      </FullCenter>
    </FullHeight>
  )
}
