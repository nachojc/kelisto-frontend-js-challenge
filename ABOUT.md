## About your solution

Add any information that will help us to understand the approach of the solution.

Inside of this project we have defined two different sections:

1. [Modeling business rules](#modeling-business-rules).
2. [Layout and React usage](#layout-and-react-usage).


## Modeling business rules
Follow the expecifications in the readme file, We have two file in 'src/domain':

    - backet.js
    - setUp.js

In the backet.js file we have the business logic implemented and in setUp.js the approach defined in your requirements.

The logic is implemented using one javascript class and in this class is implemented the construction option to inject the initial values as:

```javascript
    import Bascket from '../domain/backet';
    ...

    ...    
    const cart = new Bascket(initProducts, initOferts);
```
another option to load the product and Oferts is to create the element and use the methodes to load after.

```javascript
    import Bascket from '../domain/backet';
    ...

    ...    
    const cart = new Bascket();
    card.setProducts(initProducts);
    card.setOferts(initOferts);
```

the model to load this initProducts and initOferts have this format:

* Products
```json
Example:
    {
        GR1: {price: 3.11, name: 'Green tea'},
        SR1: {price: 5.00, name: 'Strawberries'},
        CF1: {price: 11.23, name: 'Coffee'},
    }
```
follow this pattern:
```javascript
    articleId: {       // Article ID to scan
        price: number, // Article price
        name: string   // Description name to display
    }
```
* Oferts

```json
Example:
    {
        GR1: 'buy-one-get-one-free',
        SR1: 'bulk-purchases'
    }
```
```javascript
    articleId: ofert_to_apply

    or
    
    articleId: [oferts_to_apply]
```
currently we have deffined two oferts only:
* 'buy-one-get-one-free'
* 'bulk-purchases'

inside we have defined some methodes to interact with the basket:

* setProducts(products) 
    Method to allow the overwrite the current products or load products
* setOferts(oferts)
    Method to allow the overwrite the current oferts or load oferts
* scan(articleId)
    Add article to the current cart, with the posibility of add elements followed
```javascript
cart.scan('GR1');
cart.scan('GR1').scan('SR1').scan('GR1').scan('GR1');
```

* total
    total price of basket
* getProducts()
    return one object list with the current products to select
```javascript
    {
        CF1: {id: 'CF1', price: '11.23', name: 'Coffee'},
        GR1: {id: 'GR1', price: '3.11', name: 'Green tea'},
        SR1: {id: 'SR1', price: '5', name: 'Strawberries'}
    };
```
* getBasket()
    return one array list with the current products selected
```javascript
    [
        {key: "GR1", units: 9, name: "Green tea"},
        {key: "SR1", units: 6, name: "Strawberries"},
        {key: "CF1", units: 1, name: "Coffee"},
    ]
```

## Layout and React usage

- We can to see a list of availables items on the left-hand side of the screen (block Products).
- We can to show the following information for each item in the list: name of the product, price and button to add the article (following the design).
- We can add items to the check-out cart (scan).
    - When the user clicks on "Add to the cart" link, it increments the quantity of items added to the cart.
- We can show a list of items added to the cart on the right-hand side of the screen (block Cart)
- We can show the name of the item and the quantity of them added to the cart.
- We can show the total price of the cart based on business rules.

the design is in resonsive mode follow:

- [UI Prototype – Checkout view (Figma)](https://www.figma.com/file/2DMt9AtGoYL0Ew70c7RmX4/frontend-js?node-id=0%3A1)



And 
we have one small express server in tools to have the posibility of deploy the aplication
we have the Dockerfile to build one docker image and deploy after.