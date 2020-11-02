import * as React from 'react'
import {render, screen} from '@testing-library/react'

import BasketList from './BasketList';

describe('Basket', () =>{
    test('Build app', async () => {
        const testValue = [
            {key: "GR1", units: 9, name: "Green tea"},
            {key: "SR1", units: 6, name: "Strawberries"},
            {key: "CF1", units: 1, name: "Coffee"},
        ];
        render(
            <BasketList values={testValue} total={10}/>,
        );
        const items = screen.getAllByTestId ('basket-item');
        expect(items.length).toBe(3);
        expect( screen.queryByText ('Checkout now')).toBeTruthy();
    })
    test('Build app without products', async () => {

        render(
            <BasketList />,
        );
        expect(screen.queryByText('No products in the basket')).toBeTruthy();
        expect(screen.queryByText('£0')).toBeTruthy();

        expect( screen.queryByText ('Checkout now')).toBeNull();
    })
});
