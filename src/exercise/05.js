// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Solution with extra credit 1 and 2
// Create reusable component Box, and add props

const Box = ({className, style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div 
      className={`box ${sizeClassName} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
)}

const smStyles = {backgroundColor: 'lightblue'}
const mdStyles = {backgroundColor: 'pink'}
const lgStyles = {backgroundColor: 'orange'}

const smallBox = <Box style={smStyles} size='small'>small lightblue box</Box>
const mediumBox = <Box style={mdStyles} size='medium' >medium pink box</Box>
const largeBox = <Box style={lgStyles} size='large' >large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size='small' children='sizeless box' />
    </div>
  )
}

export default App
