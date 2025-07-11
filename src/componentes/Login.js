import logo from './XP.png';
import { Input, Button, Form, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

export default function LoginUG() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Datos enviados:', values);
    // Aqui puedes hacer la petición al backend
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
      <div  style={{
            maxWidth: 500,
            width: '100%',
            background: '#fff',
            padding: 28,
            borderRadius: 20,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}> 

      {/* Logo y títulos */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 40
          }}>
          <img src={logo} style={{ width: '300px', height: 'auto' }} />
          <Title style={{ color: '#090359ff', fontWeight: 'bold', fontSize: '28px', marginTop: 16 }}>
            Login
          </Title>
        </div>

      {/* Formulario */}
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ width: 450 }}
        >
        <Form.Item
          name="usuario o email"
          rules={[{ required: true, message: 'Requerido usuario o email' }]}
        >
          <Input 
            placeholder="usuario o email"
            size="large"
            style={{ height: '52px', fontSize: '18px' }} />
        </Form.Item>

        <Form.Item 
          name="password" 
          rules={[{ required: true, message: 'Requerido contraseña' }]}>
            <Input.Password placeholder="Contraseña" size="large" 
            style={{ height: '52px', fontSize: '18px' }} />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large"
            style={{ height: '52px', fontSize: '18px' }}
              onClick={()=>navigate('/principal')}
            block>
            Iniciar Sesión
          </Button>
        </Form.Item>

        <Form.Item>
          <Button 
            type="link"
            style={{ fontSize: '14px' }}
            onClick={() => {
              navigate('/editar');
            }}
          >
            ¿Recuperar Contraseña?
          </Button>
        </Form.Item>    
        

        <Form.Item>
          <Button
            htmlType="submit"
            size="large"
            block
            style={{
              backgroundColor: 'rgba(98, 176, 110, 1)',  // verde personalizado
              borderColor: 'rgba(198, 176, 110, 1)',
              color: '#fff',
              height: '52px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
            onClick= {() => navigate('/crear')}
            >
            Crear nueva cuenta
          </Button>
        </Form.Item>


        </Form>
      </div>
    </div>
  );
}


      
