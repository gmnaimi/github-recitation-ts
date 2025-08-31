const fibonacci = (require('./fib') as unknown) as (n: number) => number;

export default (
  req: { params: { num: string } },
  res: { send: (body: string) => void }
): void => {
  const { num } = req.params;

  
  const n = Number.parseInt(num, 10);
  if (Number.isNaN(n)) {
    res.send(`n must be a number, received "${num}"`);
    return;
  }

  const fibN = fibonacci(n);

  const result =
    fibN < 0
      ? `fibonacci(${n}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;

  res.send(result);
};