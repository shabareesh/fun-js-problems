import { generateObjectBreadCrumbs } from '../objectBreadCrumbs';

test('generateObjectBreadCrumbs', () => {
    const obj = {
        name: 'test',
        address: {
            home: {
                street: 'test home street',
                city: 'test home city'
            },
            office: {
                street: 'test office street',
                city: 'test office city'
            },
        },
    };

    const expectObj = {
        user_name: 'test',
        user_address_home_street: 'test home street',
        user_address_home_city: 'test home city',
        user_address_office_street: 'test office street',
        user_address_office_city: 'test office city'
    };

    expect(JSON.stringify(generateObjectBreadCrumbs(obj, 'user'))).toEqual(JSON.stringify(expectObj));
});
