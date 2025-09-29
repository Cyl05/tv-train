import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('mock axios get data', () => {
    const users = [{name: 'Chiraag'}];
    const response = {data: users};

    axios.get.mockResolvedValue(response);

    return Users.all().then(data => expect(data).toEqual(users));
});