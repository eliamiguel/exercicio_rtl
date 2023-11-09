/* eslint-disable no-restricted-globals */
import { render, fireEvent, screen } from "@testing-library/react";
import Post from "./components/PostComments/index";

describe('Adicionar comentario', () => {
  test('Deve rederizar corretamente os comentários', () => {
    render(<Post />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Deve adicionar dois comentarios na lista', () => {
    render(<Post />);
    
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Primeiro comentário'
      }
    });
    fireEvent.click(screen.getByTestId('botao-comentario'));

    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Segundo comentário'
      }
    })
    fireEvent.click(screen.getByTestId('botao-comentario'));

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  })
})
