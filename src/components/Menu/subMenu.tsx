import React, { createContext, useState, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import { error } from 'console'

export interface SubMenuPops {
  index?: number;
  title: string;
  className?: string; 
}

const SubMenu: React.FC<SubMenuPops> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
     'is-active': context.index === index
  })
  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error('warning: SubMenu has a child which is not a MenuItem')
      }
    })
    return (
      <ul className='submenu'>
        {childComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'submenu'
export default SubMenu