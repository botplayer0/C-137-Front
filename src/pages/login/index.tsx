import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

const LoginPage: React.FC = () => {
  const handleLoginFinish = (values: any) => {
    console.log('LoginFormSummited: ', values)
  }

  const handleRegisterFinish = (values: any) => {
    console.log('RegisterFormSumitted: ', values)
  }

  const items: TabsProps['items'] = [
    {
      key: 'login',
      label: `登录`,
      children: <LoginForm onFinish={handleLoginFinish} />,
    },
    {
      key: 'register',
      label: `注册`,
      children: <RegisterForm onFinish={handleRegisterFinish} />,
    },
  ]

  return <Tabs defaultActiveKey="login" items={items} />
}

export default LoginPage
