import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button>MyButton</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>MyButton</Button>
        <Button size={ButtonSize.Large}>MyButton</Button>
        <Button disabled>disabled</Button>
        
        <Button btnType={ButtonType.Link} href='www.baidu.com' disabled>disabled</Button>

      </header>
    </div>
  );
}

export default App;
