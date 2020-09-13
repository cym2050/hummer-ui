import React, { createContext, useState, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

export interface SubMenuPops {
  index?: string;
  title: string;
  className?: string; 
}

const SubMenu: React.FC<SubMenuPops> = (props) => {
  const context = useContext(MenuContext)
  const { index, title, className, children } = props
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = ( index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false // 默认要展开的子菜单用数组存起来
  const [ menuOpen, setOpen ] = useState(isOpened) 
  const classes = classNames('menu-item submenu-item', className, {
     'is-active': context.index === index,
     'is-opened': menuOpen,
     'is-vertical': context.mode === 'vertical'
  })
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}`}) 
      } else {
        console.error('warning: SubMenu has a child which is not a MenuItem')
      }
    })
    return (
      // <CSSTransition
      //   in={menuOpen}
      //   timeout={300}
      //   classNames='zoom-in-top'
      //   appear
      //   unmountOnExit
      // >
      //   <ul className={subMenuClasses}>
      //     {childComponent}
      //   </ul>
      // </CSSTransition>
      <Transition
        in={menuOpen}
        timeout={300}
        animation='zoom-in-bottom'
      >
        <ul className={subMenuClasses}>
          {childComponent}
        </ul>
      </Transition>
    )
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleHover = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvent = context.mode === 'vertical' ? { handleClick } : {}
  const hoverEvent = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleHover(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleHover(e, false) }
  } : {}
  return (
    <li key={index} className={classes} {...hoverEvent} >
      <div onClick={handleClick} {...clickEvent} data-testid='test-submenu'>
        {title} <Icon icon='angle-down' className='arrow-icon' />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'submenu'
export default SubMenu