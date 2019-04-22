
// Link components footer 操作的componnet

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// QQQQQQQQ写到这里 越写越懵逼 知道是什么结构 但是不知道思想了

const Link = ({ active, children, setFilter }) => 
  (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid  
    <a
      className={classnames({ selected: active })}
      style={{ coursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )


Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default Link