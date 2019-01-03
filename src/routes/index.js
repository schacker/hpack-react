import Module1 from 'pages/Module1'
import Module2 from 'pages/Module2'
export const routes = [
  {
    path: '/',
    title: '模块1',
    component: Module1,
    show: true,
    exact: true
  },
  {
    path: '/path2',
    title: '模块2',
    component: Module2,
    show: true,
    exact: true
  }
]
