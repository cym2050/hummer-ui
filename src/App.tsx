import React, { useState } from 'react'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'

// 直接引入,变量类型的 icon
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Build a Library，字符串 引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {/* <FontAwesomeIcon icon={faCoffee} /> 变量形式引用 */}
        {/* <Icon icon={faCoffee} theme='danger' size='10x' /> */}
        {/* <FontAwesomeIcon icon='arrow-down' /> */}
        {/* <Icon icon='arrow-down' theme='danger' size='10x' /> */}
        <Menu onSelect={(index) => { alert(index)}}  defaultOpenSubMenus={['3']}>
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
        <Button size='lg' onClick={ () => { setShow(!show) } }> Toggle </Button>
        <Transition in={show} timeout={200} animation='zoom-in-top' wrapper>
          <div>
            <p>nihaoasdfasdfas</p>
            <p>nihaoasdfasdfadsf</p>
            <p>nihaofasdfadsfadsf</p>
            <p>nihaoasdfasdfadsf</p>
            <p>nihaofasdfadsfadsf</p>
            <p>nihaoasdfasdfadsf</p>
            <p>nihaofasdfadsfadsf</p>
          </div>
          <Button btnType='primary' size='lg'>asdfadfa</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
