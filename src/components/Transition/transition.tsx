import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left' 

// interface TransitionProps extends CSSTransitionProps {  //接口只能扩展使用静态已知成员的对象类型或对象类型的交集
//   animation?: AnimationName
// }

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { animation, classNames, children, wrapper, ...restProps } = props
  return (
    <CSSTransition
      classNames={ classNames ? classNames : animation }
      {...restProps}
    >
      {wrapper? <div>{children}</div> : children}
    </CSSTransition>
  )
} 

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition