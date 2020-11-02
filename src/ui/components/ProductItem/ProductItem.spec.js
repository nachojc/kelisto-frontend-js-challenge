import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import ProductItem from './ProductItem';

describe('Basket', () =>{
    test('Build app', async () => {
        const testValue = {name: 'demo', price: '1', id: 'ID1'};
        let value = null;
        const scan = function (val) {
          value = val;
        }
        render(
            <ProductItem value={testValue} scan={scan}/>,
        );
        expect(screen.queryByText(testValue.name)).toBeTruthy();
        expect(screen.queryByText(`£${testValue.price}`)).toBeTruthy();
        const button = screen.queryByText('Add to the cart');
        fireEvent.click(button);

        expect(value).toEqual(testValue.id);
    })
});
