import React, { createElement } from 'react'
import { render, RenderResult, fireEvent, cleanup, wait } from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      {/* <MenuItem index={0}> 升级后不用传入index */}
      <MenuItem>
        active
      </MenuItem>
      {/* <MenuItem index={1} disabled> */}
      <MenuItem disabled>
        disabled
      </MenuItem>
      {/* <MenuItem index={2}> */}
      <MenuItem>
        link
      </MenuItem>
      <SubMenu title='dropdown'>
        <MenuItem>
          drop1
        </MenuItem>
        <MenuItem>
          drop2
        </MenuItem>
      </SubMenu>
      {/* <li>hello</li> */}
    </Menu>
  )
}

// 添加 CSS
const createStyleFile = () => {
  const cssFile: string = `
    .submenu {
      display: none;
    }
    .submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())  // ？
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  // 默认属性
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    // expect(menuElement.getElementsByTagName('li').length).toEqual(4)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  // 触发事件，回调函数
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('link')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')

  })
  // 特例，是否渲染特定的 .className
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup() // 清理，防止出现多个 wrapper 节点
    const wrapper = render(generateMenu(testVerProps))
    const element = wrapper.getByTestId('test-menu')
    expect(element).toHaveClass('menu-vertical')
  })
  // 测试横向的 hover
  it('should show dropdown  items when hover on submenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toBeCalledWith('3-0')
  })
  // 测试垂直情况下 点击 弹出子菜单 //里程碑
  it('should show submenu when click submenu', () => {
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    wrapper.container.append(createStyleFile())
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const element = wrapper.getByTestId('test-submenu')
    fireEvent.click(element)
    expect(wrapper.queryByText('drop1')).toBeVisible()
  })
  // 测试垂直情况下 默认展开  // 里程碑
  it('submenu should open when the submenu index in the array defaultOpenSubMenu', () => {
    cleanup()
    const wrapper = render(generateMenu({...testVerProps, defaultOpenSubMenus: ['3']}))
    wrapper.container.append(createStyleFile())
    expect(wrapper.queryByText('drop1')).toBeVisible()
  })
})



// test library 提供了 async/await，等待操作完成才进行断言（waiting for appearance，waiting for disappearance）