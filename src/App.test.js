import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('mostra a Destack Dedetizadora', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /controle de pragas/i })).toBeInTheDocument();
});
