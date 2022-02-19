import React from 'react'
import PropTypes from 'prop-types';

export default function Select({ visibleType, options, onChange }) {
  return (
    <ul>
      { options.map(option =>
        <li
          key={option.id}
          className={`${visibleType === option.value ? 'active': ''}`}
        >
          <option
            value={option.value}
            label={option.label}
            onClick={e => onChange(e.target.value)}
          />
        </li>)
      }
    </ul>
  )
}

Select.propTypes = {
  visibleType: PropTypes.string,
  options: PropTypes.array
};