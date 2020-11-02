
import * as React from 'react'
import {render, screen} from '@testing-library/react'

import BasketItem from './BasketItem';

describe('Basket', () =>{
    test('Build app', async () => {
        const testValue = {name: 'demo', units: 1}
        render(
            <BasketItem value={testValue} />,
        );

        expect(screen.queryByText(testValue.name)).not.toBeNull()
    })
});
