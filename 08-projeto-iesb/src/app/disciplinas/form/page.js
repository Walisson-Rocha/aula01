'use client';

import { useEffect, useState } from 'react';
import Pagina from '@/components/Pagina';
import { useRouter } from 'next/navigation';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { v4 } from 'uuid';

export default function DisciplinaFormPage(props) {
  const router = useRouter();
  const [disciplinas, setDisciplinas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('disciplinas')) || [];
    setDisciplinas(data);

    const cursosData = JSON.parse(localStorage.getItem('cursos')) || [];
    setCursos(cursosData);

    const professoresData = JSON.parse(localStorage.getItem('professores')) || [];
    setProfessores(professoresData);
  }, []);

  const id = props.searchParams?.id;
  const disciplinaEditada = disciplinas.find(item => item.id === id);

  function salvar(dados) {
    if (disciplinaEditada) {
      const index = disciplinas.findIndex(item => item.id === id);
      const updatedDisciplinas = [...disciplinas];
      updatedDisciplinas[index] = { ...updatedDisciplinas[index], ...dados };
      localStorage.setItem('disciplinas', JSON.stringify(updatedDisciplinas));
    } else {
      dados.id = v4();
      const updatedDisciplinas = [...disciplinas, dados];
      localStorage.setItem('disciplinas', JSON.stringify(updatedDisciplinas));
    }

    alert("Disciplina salva com sucesso!");
    router.push("/disciplinas");
  }

  const initialValues = {
    Nome: disciplinaEditada ? disciplinaEditada.Nome : '',
    Desclição: disciplinaEditada ? disciplinaEditada.Desclição : '',
    status: disciplinaEditada ? disciplinaEditada.status : '',
    curso: disciplinaEditada ? disciplinaEditada.curso : '',
    Professor: disciplinaEditada ? disciplinaEditada.Professor : '',
  };

  const validationSchema = Yup.object().shape({
    Nome: Yup.string().required("Campo obrigatório"),
    Desclição: Yup.string().required("Campo obrigatório"),
  });

  return (
    <Pagina titulo={"Cadastro de Disciplina"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name='Nome'
                  type='text'
                  value={values.Nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.Nome && !errors.Nome}
                  isInvalid={touched.Nome && errors.Nome}
                />
                <Form.Control.Feedback type='invalid'>{errors.Nome}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  name='Desclição'
                  type='text'
                  value={values.Desclição}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.Desclição && !errors.Desclição}
                  isInvalid={touched.Desclição && errors.Desclição}
                />
                <Form.Control.Feedback type='invalid'>{errors.Desclição}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Status:</Form.Label>
                <Form.Select
                  name='status'
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.status && !errors.status}
                  isInvalid={touched.status && errors.status}
                >
                  <option value=''>Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{errors.status}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Cursos:</Form.Label>
                <Form.Select
                  name='curso'
                  value={values.curso}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.curso && !errors.curso}
                  isInvalid={touched.curso && errors.curso}
                >
                  <option value=''>Selecione</option>
                  {cursos.map(curso => (
                    <option key={curso.nome} value={curso.nome}>{curso.nome}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Professor:</Form.Label>
                <Form.Select
                  name='Professor'
                  value={values.Professor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.Professor && !errors.Professor}
                  isInvalid={touched.Professor && errors.Professor}
                >
                  <option value=''>Selecione</option>
                  {professores.map(professor => (
                    <option key={professor.nome} value={professor.nome}>{professor.nome}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>{errors.Professor}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className='text-end'>
              <Button className='me-2' href='/disciplinas'><FaArrowLeft /> Voltar</Button>
              <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}
