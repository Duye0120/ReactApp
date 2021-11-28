import styles from './index.module.less';
import { Form, Input, Button, Checkbox } from 'antd';


function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <Form
          name='basic'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[{
              required: true,
              message: 'Please input your username!',
            }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{
              required: true,
              message: 'Please input your password!',
            }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked' wrapperCol={{
            offset: 8,
            span: 16,
          }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{
            offset: 8,
            span: 16,
          }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
