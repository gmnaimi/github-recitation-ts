// src/fibRoute.ts


import { Request, Response } from 'express';
import { fib } from './fib';

type FibParams = { num: string };

export default function fibRoute(req: Request<FibParams>, res: Response): void {
  const { num } = req.params;          
  const n = Number.parseInt(num, 10); 

  if (Number.isNaN(n)) {
    res.status(400).send(`n must be a number, received "${num}"`);
    return;
  }

  const fibN: number = fib(n);
  let result = `fibonacci(${n}) is ${fibN}`;
  if (fibN < 0) {
    result = `fibonacci(${n}) is undefined`;
  }

  res.send(result);
}
