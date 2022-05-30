var faker = require('faker/locale/pt_BR');
const categoryController = require('../../../src/controllers/category.controller');
const categoryModel = require('../../../src/models/category.model');

jest.spyOn(console, 'log').mockImplementation();

describe('category', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('create category with return success', async () => {
        expect.hasAssertions();

        jest.spyOn(categoryModel, 'create')
            .mockImplementationOnce(jest.fn().mockReturnValue(true));

        let response = undefined;
        response = await categoryController.createCategory(
            {
                'name': faker.random.word(),
                'description': faker.random.word(),
            }
        );

        expect(response).toBeDefined();
        expect(response).toHaveProperty('data');
        expect(response.data).toEqual('OK');
        expect(categoryModel.create).toHaveBeenCalledTimes(1);
    })

    it('find category bye id with return success', async () => {
        expect.hasAssertions();

        jest.spyOn(categoryModel, 'get')
            .mockImplementationOnce(jest.fn().mockReturnValue([{
                'id': faker.datatype.number({ min: 1 }),
                'name': faker.random.word(),
                'description': faker.random.word(),
                'created': faker.random.word(),
                'updated': faker.random.word()
            }]));

        let response = undefined;
        response = await categoryController.findCategory(1);

        expect(response).toBeDefined();
        expect(response).toHaveProperty('data');
        expect(response.data.length).toEqual(1);
        expect(categoryModel.get).toHaveBeenCalledTimes(1);
    })
})
