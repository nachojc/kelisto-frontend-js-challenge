import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'

import ProductList from './ProductList';

describe('Basket', () =>{
    test('Build app', async () => {
        const testValue = {
            CF1: {id: 'CF1', price: '11.23', name: 'Coffee'},
            GR1: {id: 'GR1', price: '3.11', name: 'Green tea'},
            SR1: {id: 'SR1', price: '5', name: 'Strawberries'}
        };
        let value = null;
        const scan = function (val) {
          value = val;
        }
        render(
            <ProductList values={testValue} scan={scan}/>,
        );
        expect(screen.queryByText(testValue.CF1.name)).toBeTruthy();
        expect(screen.queryByText(`£${testValue.GR1.price}`)).toBeTruthy();

        const buttons = await screen.findAllByText ('Add to the cart');
        expect(buttons.length).toBe(3)
        fireEvent.click(buttons[2]);

        expect(value).toEqual(testValue.SR1.id);
    })
    test('Build app without products', async () => {
        const testValue = null;
        const scan = function () {}
        
        render(
            <ProductList values={testValue} scan={scan}/>,
        );
        expect(screen.queryByText('No products aviable')).toBeTruthy();

        expect( screen.queryByText ('Add to the cart')).toBeNull();
    })
});
