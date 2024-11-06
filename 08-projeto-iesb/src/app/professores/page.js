"use client"; // Adicione esta linha no topo do arquivo

import React, { useState, useEffect } from 'react';
import Pagina from '@/components/Pagina' // Ajuste o caminho conforme necessário
import { Button, Table } from 'react-bootstrap'; // Certifique-se de que esses componentes estão instalados
import { FaPlusCircle, FaPen, FaTrash } from 'react-icons/fa';

const ProfessoresPage = () => {
  const [professores, setProfessores] = useState([]);

  // Simule a busca de dados (substitua isso pela sua lógica real)
  useEffect(() => {
    // Aqui você deve buscar os dados dos professores e definir o estado
    // setProfessores(fetchedData);
  }, []);

  const excluir = (professor) => {
    // Lógica para excluir um professor
  };

  return (
    <Pagina titulo={"Lista de Professores"}>
      <div className='text-end mb-2'>
        <Button href='/professores/form'><FaPlusCircle /> Novo</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Status</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.map(professor => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.matricula}</td>
              <td>{professor.status}</td>
              <td>{professor.curso}</td>
              <td className='text-center'>
                <Button className='me-2' href={`/professores/form?id=${professor.id}`}><FaPen /></Button>
                <Button variant='danger' onClick={() => excluir(professor)}><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default ProfessoresPage;
