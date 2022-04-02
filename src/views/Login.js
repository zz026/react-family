import { Button, Input } from 'antd';
import { useEffect } from 'react';
import Form from '../components/Form'
// import Input from './components/Input'

const Login = () => {
  const [form] = Form.useForm()

  const onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (err) => {
    console.log("onFinishFailed", err); //sy-log
  };

  useEffect(() => {
    form.setFieldsValue({
      username: '臭屁佳佳'
    })
    console.log('form', form)
  }, [])

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: '请输入账号' }
        ]}
      >
        <Input placeholder='请输入账号' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码' }
        ]}
      >
        <Input placeholder='请输入密码' />
      </Form.Item>
      <Form.Item
        name="again_password"
      >
        <Input placeholder='请再次输入密码' type="password" />
      </Form.Item>
      {/* <button >提交</button> */}
      <Button type="primary" onClick={() => form.submit()}>提交</Button>
    </Form>
  )
}

export default Login