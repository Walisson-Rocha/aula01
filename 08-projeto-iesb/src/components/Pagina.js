'use client'

import { Container, Nav, Navbar } from "react-bootstrap"

export default function Pagina({ titulo, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Barra de Navegação */}
      <Navbar bg="light" data-bs-theme="danger">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/faculdades">Faculdades</Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Barra de Titulo */}
      <div className="bg-danger text-center text-white py-2">
        <h1>{titulo}</h1>
      </div>

      {/* Conteudo da Página */}
      <Container className="flex-grow-1 mt-2">
        {children}
      </Container>
      
      <footer className="bg-danger text-white text-center py-3">
        <div className="container">
          <p>&copy; Walisson Rocha. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
