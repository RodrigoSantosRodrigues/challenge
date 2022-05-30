var faker = require('faker/locale/pt_BR');
const productController = require('../../../src/controllers/product.controller');
const productModel = require('../../../src/models/product.model');

jest.spyOn(console, 'log').mockImplementation();

describe('product', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('create product with return success', async () => {
        expect.hasAssertions();

        jest.spyOn(productModel, 'create')
            .mockImplementationOnce(jest.fn().mockReturnValue(true));

        let response = undefined;
        response = await productController.createProduct(
            {
                name: faker.random.word(),
                description: faker.random.word(),
                value: faker.datatype.number({ min: 1 }),
                category_id: faker.datatype.number({ min: 1 })
            }
        );

        expect(response).toBeDefined();
        expect(response).toHaveProperty('data');
        expect(response.data).toEqual('OK');
        expect(productModel.create).toHaveBeenCalledTimes(1);
    })

    it('find product bye id with return success', async () => {
        expect.hasAssertions();

        jest.spyOn(productModel, 'get')
            .mockImplementationOnce(jest.fn().mockReturnValue([{
                'id': faker.datatype.number({ min: 1 }),
                'name': faker.random.word(),
                'description': faker.random.word(),
                'value': faker.datatype.number({ min: 1 }),
                'category_id': faker.datatype.number({ min: 1 }),
                'created': faker.random.word(),
                'updated': faker.random.word()
            }]));

        let response = undefined;
        response = await productController.findProduct(1);

        expect(response).toBeDefined();
        expect(response).toHaveProperty('data');
        expect(response.data.length).toEqual(1);
        expect(productModel.get).toHaveBeenCalledTimes(1);
    })
})
