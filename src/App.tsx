import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(e) => alert(e)}>
            <MenuItem index={0}>
              link1
            </MenuItem>
            <MenuItem index={1}>
              link2
            </MenuItem>
            <MenuItem index={2}>
              link3
            </MenuItem>
        </Menu>


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
