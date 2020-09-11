import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu>
            <MenuItem disabled>
              link1
            </MenuItem>
            <MenuItem>
              link2
            </MenuItem>
            <MenuItem>
              link3
            </MenuItem>
            <SubMenu title='dropdown'>
              <MenuItem>
                sdfsd 1
              </MenuItem>
              <MenuItem>
                sdfsd 2
              </MenuItem>
            </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
