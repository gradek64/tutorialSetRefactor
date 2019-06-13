import apiService from './apiService';


test('renders correctly', () => {
  // const set = param => jest.fn(data => Promise.resolve({ data: data + param }));
  // apiService.get = set(3);

  // mock implemenation

  // foo is a mock function
  // apiService.get.mockResolvedValue('bar');
  // console.log(apiService.get.mockResolvedValue('bar'));
  apiService.get = jest.fn(() => Promise.resolve('bar'));
  apiService.get.mockResolvedValue('bar').then((data) => {
    console.log('data', data);
  });


  // apiService.send = jest.fn(x => 42 + x);
  // expect(apiService.send()).toBe('some Value');
  // console.log(apiService.get());

  /* expect(apiService.get).toHaveBeenCalled();
  apiService.get('value');
  expect(apiService.get).toHaveBeenCalledTimes(2);
  expect(apiService.get).toHaveBeenCalledWith('value'); */


  // apiService.get(3).then((data) => { console.log(data); });
  // expect(apiService.send({ prop: 'prop' })).toEqual({ prop: 'prop' });
});
