import React from 'react'
import PropTypes from 'prop-types';
import { StyledOptionWrapper, StyledOption } from './style';

export default function Select({ visibleType, options, onChange }) {
  return (
    <StyledOptionWrapper>
      { options.map(option =>
        <StyledOption
          key={option.id} 
          active={visibleType === option.value && true}
        >
          <option
            value={option.value}
            label={option.label}
            onClick={e => onChange(e.target.value)}
          />
        </StyledOption>)
      }
    </StyledOptionWrapper>
  )
}

Select.propTypes = {
  visibleType: PropTypes.string,
  options: PropTypes.array
};