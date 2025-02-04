import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button classNamee="m-auto text-center" variant="primary">hello</Button>
    </>
  );
}

export default App;
