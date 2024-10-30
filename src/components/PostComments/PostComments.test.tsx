import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('Teste para o componente PostComments', () => {
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        fireEvent.change(screen.getByTestId('comment-input'), {
            target: { value: 'Primeiro comentário' },
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-input'), {
            target: { value: 'Segundo comentário' },
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        const comments = screen.getAllByTestId('comment');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});
