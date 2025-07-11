import { useNavigate } from 'react-router-dom';
import logo from './XP.png';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const Recuperar = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Datos enviados:', values);
    // Aquí puedes hacer la petición al backend
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          maxWidth: 500,
          width: '100%',
          background: '#fff',
          padding: 28,
          borderRadius: 20,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <img src={logo} style={{ width: '300px', height: 'auto' }} />
          <Title
            style={{
              color: '#090359ff',
              fontWeight: 'bold',
              fontSize: '28px',
              marginTop: 16,
            }}
          >
            Recuperar contraseña
          </Title>
        </div>

        <Form form={form} onFinish={onFinish} layout="vertical" style={{ width: 450 }}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Requerido usuario o email' }]}
          >
            <Input placeholder="Usuario o email" size="large" style={{ height: '52px', fontSize: '18px' }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Requerido contraseña' }]}
          >
            <Input.Password placeholder="Nueva contraseña" size="large" style={{ height: '52px', fontSize: '18px' }} />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Debe confirmar contraseña' }]}
          >
            <Input.Password placeholder="Repetir contraseña" size="large" style={{ height: '52px', fontSize: '18px' }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ height: '52px', fontSize: '18px' }}
              block
            >
              Recuperar
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" style={{ fontSize: '14px' }} onClick={() => navigate('/login')}>
              ¿Volver al login?
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Recuperar;
