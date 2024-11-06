'use client'

import Pagina from '@/components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function HomePage() {


  const faculdades = JSON.parse(localStorage.getItem("faculdades")) || []
  const cursos = JSON.parse(localStorage.getItem("cursos")) || []
  const professores = JSON.parse(localStorage.getItem("professores")) || []
  const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || []
  const alunos = JSON.parse(localStorage.getItem("alunos")) || []

  const lista = [
    {
      nome: "Faculdades",
      imagem: "https://apcefdf.org.br/portal/data/files/EA/25/9C/8E/5D7077109199BF67403A91A8/iesb.png", quantidade: faculdades.length,
      link: "/faculdades"
    },
    {
      nome: "Cursos",
      imagem: "https://i.pinimg.com/474x/b2/1d/08/b21d0843c3a0d5f5586222644bf402cd.jpg", quantidade: cursos.length,
      link: "/cursos"
    },
    {
      nome: "Professores",
      imagem: "https://i.pinimg.com/736x/39/09/fb/3909fb65bbab271bb5a9ddbf85c80d00.jpg", quantidade: professores.length,
      link: "/professores"
    },
    {
      nome: "Disciplinas",
      imagem: "https://i.pinimg.com/236x/79/0f/fc/790ffceeb183a1059b77c5558342ffc0.jpg", quantidade: disciplinas.length,
      link: "/disciplinas"
    },
    {
      nome: "Alunos",
      imagem: "https://i.pinimg.com/236x/ce/96/4d/ce964d843b92374b8b96e105ffa82831.jpg", quantidade: alunos.length,
      link: "/alunos"
    },
    {
      nome: "walisson",
      imagem: "https://scontent.fbsb22-1.fna.fbcdn.net/v/t51.75761-15/463952453_18317283013083459_6955205650611896136_n.jpg?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYTHnxYeUdr2IjrWkbMJow6oaqLojXzUjqhqouiNfNSEMGlutRUb218H3hl4MYSKCQBvPyBzKt7e9l3Vv7sYla&_nc_ohc=fWZ0ifBM5dMQ7kNvgGnm3kp&_nc_zt=23&_nc_ht=scontent.fbsb22-1.fna&_nc_gid=ANCm-GhuI1y3CWVYmeBOgED&oh=00_AYCACnSKesQHcyocH_ZRvv4haU_4sQ1Rphwn1R5eiV97NA&oe=67293815",
    },
  ]



  return (
    <Pagina titulo={"SEJA BEM VINDO AO IESB!"}>
      <Row className="mx-auto" style={{ maxWidth: '1200px' }}>
        {lista.map(item => (
          <Col md={4} className='py-100' key={item.id}> {/* 4 cards por linha */}
            <Card style={{ height: '400px', width: '100%' }}>
              <Card.Img src={item.imagem} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{item.nome}</Card.Title>
                <div>Cadastrados: {item.quantidade}</div>
              </Card.Body>
              <Card.Footer className='text-end'>
                <Button href={item.link} variant='danger'>Ver Lista</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
  
  
  
  
  
  
}
