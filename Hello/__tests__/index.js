const helloFunction = require('../index');

test('a trivial test case', () => {
  expect(true).toBe(true);
});

test('', async () => {
  const context = {};
  const req = {
    query: {
      name: 'lingo'
    }
  };

  await helloFunction(context, req);
  expect(context.res.body).toMatch(/Hello, lingo/);
});
