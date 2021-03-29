import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.less'
import 'normalize.css'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div>aaaa</div>
    </ConfigProvider>
  )
}

export default App
