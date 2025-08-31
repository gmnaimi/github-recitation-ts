// Endpoint for querying the fibonacci numbers

import { fibonacci } from './fib';

type Req = { params: { num: string } };
type Res = { send: (body: string) => void };

export default (req: Req, res: Res): void => { const { num } = req.params; const n = Number.parseInt(num, 10);
  if (Number.isNaN(n)) {
    res.send(`n must be a number, received "${num}"`);
    return;
  }

  const fibN = fibonacci(n);

  let resultRequired = `fibonacci(${n}) is ${fibN}`;

  
  if (fibN < 0) {
    resultRequired = `fibonacci(${n}) is undefined`;
  }
 res.send(resultRequired);
};