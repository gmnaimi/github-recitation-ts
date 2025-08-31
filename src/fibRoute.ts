// src/fibRoute.ts
import type { Request, Response } from 'express';

const fib = (require('./fib') as unknown) as (n: number) => number;

export default function fibRoute(req: Request, res: Response): void {

  const { num } = req.params as { num: string };

  const n = Number.parseInt(num, 10);
  if (Number.isNaN(n)) {
    res.status(400).send(`n must be a number, received "${num}"`);
    return;
  }

  const fibN = fib(n); 
  const result = fibN < 0 ? `fibonacci(${n}) is undefined` : `fibonacci(${n}) is ${fibN}`;
  res.send(result);
}
