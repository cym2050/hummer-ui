import React, { useState } from 'react'
import Doc from './views/Doc'

// 直接引入,变量类型的 icon
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Build a Library，字符串 引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <Doc></Doc>
  );
}

export default App;
