import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Test render', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
