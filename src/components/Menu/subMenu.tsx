import React, { createContext, useState, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import { error } from 'console'

export interface SubMenuPops {
  index?: string;
  title: string;
  className?: string; 
}

const SubMenu: React.FC<SubMenuPops> = (props) => {
  const [ menuOpen, setOpen ] = useState(false)
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
     'is-active': context.index === index
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
      <ul className={subMenuClasses}>
        {childComponent}
      </ul>
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
    <li key={index} className={classes} {...hoverEvent}>
      <div onClick={handleClick} {...clickEvent}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'submenu'
export default SubMenu