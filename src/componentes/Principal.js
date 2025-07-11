import React, {useEffect, useState} from 'react';
import logo from './XP.png';
import { Table, Tag, Space, Button, Typography, Col, Row, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;

const { Column, ColumnGroup } = Table;


function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  const dia = hoy.getDate() - nacimiento.getDate();

  if (mes < 0 || (mes === 0 && dia < 0)) {
    edad--;
  }

  return edad;
}

const endpoint ='http://localhost:8000/api'

const Principal = () => {

    const navigate = useNavigate()
    const [usuarios, setusuarios] = useState([])
    const [filtro, setfiltro] = useState('')
    const [buscando, setBuscando] = useState(false);

    useEffect (()=> {
        vertabla()
    } )

    const vertabla = async () => {
        const response = await axios.get(`${endpoint}/usuarios`)
        setusuarios(response.data)
    }

    const borrar = async (id) => {
        const response = axios.put(`${endpoint}/usuario/$id`)
        vertabla()
    }

    const usuariosFiltrados = usuarios.filter((usuario) => {
    const texto = filtro.toLowerCase();
    const edad = calcularEdad(usuario.fecha_nac)
    return (
        usuario.nombres?.toLowerCase().includes(texto) ||
        usuario.apellidos?.toLowerCase().includes(texto) ||
        usuario.usuario?.toLowerCase().includes(texto) ||
        usuario.email?.toLowerCase().includes(texto) ||
        edad.toString().includes(texto) 
    );
    });
    
  return (
    <div style={{ padding: 40, textAlign: 'center', margin: 0  }}>
        <img 
        src={logo} 
        alt="logo"
        style={{ 
            width: '300px',
            height: 'auto',
            margin: '0 auto',  // centra la imagen y elimina márgenes arriba y abajo
            padding: 0,
            display: 'block',
        }} 
        />  
      <Title>Usuarios</Title>
      <Table 
         dataSource={usuariosFiltrados}
         rowKey="id"
         style={{ fontSize: '24px' }}>
        <ColumnGroup title="Nombre">
          <Column title="Nombre" dataIndex="nombres" key="nombres" style={{ fontSize: '24px' }} />
          <Column title="Apellido" dataIndex="apellidos" key="apellidos" style={{ fontSize: '18px' }} />
        </ColumnGroup>
        <Column title="Usuario" dataIndex="usuario" key="usuario" style={{ fontSize: '18px' }} />
        <Column title="Email" dataIndex="email" key="email" style={{ fontSize: '18px' }} />
        <Column title="Contraseña" dataIndex="contrasena" key="contrasena" style={{ fontSize: '18px' }} />
        <Column
          title="Edad"
          key="edad"
          render={(_, record) => calcularEdad(record.fecha_nac)}
          style={{ fontSize: '18px' }}
        />
        <Column
          title="Acciones"
          key="action"
          style={{ fontSize: '18px' }}
          render={(_, record) => (
            <Space size="middle">
              <a href="#">editar</a><a href="#">Eliminar</a>
            </Space>
          )}
        />
      </Table>
      <div>
        <Row gutter={16}>
            <Col span={12} style={{ textAlign: 'left' }}>
                {buscando ? (
                    <Input
                    placeholder="Buscar usuario..."
                    size="large"
                    style={{ width: 250 }}
                    value={filtro}
                    onChange={(e) => setfiltro(e.target.value)}
                    onBlur={() => setBuscando(false)} // opcional: cerrar cuando pierda foco
                    autoFocus
                    />
                ) : (
                    <Button
                    size="large"
                    type="primary"
                    icon={<SearchOutlined />}
                    style={{ width: 200 }}
                    onClick={() => setBuscando(true)}
                    >
                    Buscar
                    </Button>
                )}
             </Col>

            <Col span={12} style={{ textAlign: 'right' }}>
                <Button
                htmlType="submit"
                size="large"
                type="primary"
                style={{ width: 200 }}
                onClick={() => navigate('/login')}
                >
                Regresar al login
                </Button>
            </Col>
            </Row>
      </div>
    </div>
  );
};

export default Principal;
