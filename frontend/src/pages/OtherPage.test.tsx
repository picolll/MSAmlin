import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OtherPage from './OtherPage';
import React from 'react';

// One test
test('renders other page', () => {
  render(<OtherPage />);
    expect(screen.getByText('Other Page')).toBeInTheDocument();
});
