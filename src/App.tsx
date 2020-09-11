import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'

// 直接引入,变量类型的 icon
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Build a Library，字符串 引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FontAwesomeIcon icon={faCoffee} /> 变量形式引用 */}
        {/* <Icon icon={faCoffee} theme='danger' size='10x' /> */}
        <Icon icon='arrow-down' theme='danger' size='10x' />
        <Menu onSelect={(index) => { alert(index)}} mode='vertical' defaultOpenSubMenus={['3']}>
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
