export async function test(req) {
  console.log('[DEBUG] ---> Cloud function \'test\' called, req: ', req);
  return ({
    test: 'success',
  });
}
