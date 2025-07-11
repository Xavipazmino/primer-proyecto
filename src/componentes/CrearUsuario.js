import axios from 'axios'
import logo from './XP.png';
import { useState } from 'react'
import { Button, Input, Form, Typography, Col, Row, Radio, Select } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Title, Link } = Typography;
const { Option } = Select;

const endpoint = 'http://localhost:8000/api/usuario'

const CrearUsuario = () => {
    const [form] = Form.useForm();

    const [usuario, setusuario] = useState('')
    const [email, setemail] = useState('')
    const [contrasena, setcontrasena] = useState('')
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('')
    const [fecha, setfecha] = useState('')
    const navigate = useNavigate()

    const store = (e) => {
        e.preventDefault()
        axios.post(endpoint, 
            {usuario: usuario, 
            email: email, 
            contrasena: contrasena, 
            nombre: nombre, 
            apellido: apellido, 
            fecha: fecha})
    }

    return (
    <div style={{ background: '#f0f2f5', padding: '60px 0', minHeight: '100vh' }}>
      <div style={{
        maxWidth: 450,
        margin: 'auto',
        background: '#fff',
        padding: 14,
        borderRadius: 10,
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <img src={logo} style={{ width: '180px', height: 'auto' }} />
        <Title level={1} style={{ color: '#020243ff', textAlign: 'center' }}>Social Media</Title>
        <Title level={4} style={{  color: '#020243ff', textAlign: 'center' }}>Crea una cuenta</Title>

        <Form form={form} layout="vertical" onFinish={store}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="nombre" rules={[{ required: true, message: 'Nombre requerido' }]}>
                <Input 
                    placeholder="Nombre" 
                    size="large" 
                    onChange={(e)=> setnombre(e.target.value)}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="apellido" rules={[{ required: true, message: 'Apellido requerido' }]}>
                <Input 
                    placeholder="Apellido" 
                    size="large" 
                    onChange={(e)=> setapellido(e.target.value)}/>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Fecha de nacimiento" style={{ marginBottom: 8 }}>
            <Input.Group compact>
              <Form.Item name="dia" noStyle rules={[{ required: true }]}>
                <Select placeholder="Día" style={{ width: '32%' }}>
                  {[...Array(31)].map((_, i) => (
                    <Option key={i + 1} value={i + 1}>{i + 1}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="mes" noStyle rules={[{ required: true }]}>
                <Select placeholder="Mes" style={{ width: '36%' }}>
                  {['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'].map((m, i) => (
                    <Option key={m} value={m}>{m}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="año" noStyle rules={[{ required: true }]}>
                <Select placeholder="Año" style={{ width: '32%' }}>
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return <Option key={year} value={year}>{year}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item label="Género" name="genero" rules={[{ required: true, message: 'Selecciona un género' }]}>
            <Radio.Group style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Radio value="mujer">Mujer</Radio>
              <Radio value="hombre">Hombre</Radio>
              <Radio value="personalizado">Personalizado</Radio>
            </Radio.Group>
          </Form.Item>

        <Form.Item name="usuario" rules={[{ required: true, message: 'Requerido' }]}>
            <Input placeholder="Nombre de usuario" size="large" />
          </Form.Item>

          <Form.Item name="contacto" rules={[{ required: true, message: 'Requerido' }]}>
            <Input placeholder="Número de celular o correo electrónico" size="large" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Requerido' }]}>
            <Input.Password placeholder="Contraseña nueva" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              block
              size="large"
              style={{
                backgroundColor: '#f10c23ff',
                borderColor: '#b72a2aff',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
            >
              Registrarte
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <Link  
                href="#" 
                style={{ color: '#1877f2', fontSize: 15 }}
                onClick = {() => navigate('/login')}>
              ¿Ya tienes una cuenta?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CrearUsuario