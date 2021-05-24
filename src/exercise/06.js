// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // const usernameRef = React.useRef('')
  const [username, setUsername] = React.useState('');
  // const [isValid, setIsValid] = React.useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    // First aproach
    // const username = e.target.elements.username.value;
    // onSubmitUsername(username)

    // Second aproach, using ref
    // onSubmitUsername(usernameRef.current.value)
    // using states
    onSubmitUsername(username)
  }

  const onChange = (e) => {
    // const value = e.target.value;
    // setIsValid(value === value.toLowerCase());
    setUsername(e.target.value.toLowerCase())
  }

  // const errorMsg = (display) => (
  //   display && 
  //   <p role='alert' style={{color: 'red'}}>
  //     Username must be lower case
  //   </p>
  // )

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input onChange={onChange} value={username} type="text" id='username' />
      </div>
      {/* {errorMsg(!isValid)} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
