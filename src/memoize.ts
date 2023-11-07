// Implementación recursiva simple del cálculo de Fibonacci
export const recursiveFib = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    return recursiveFib(n - 1) + recursiveFib(n - 2);
  };
  
  // Implementación de Fibonacci con memoización
  export const memoizedFib = (function() {
    const memo = new Map<number, number>();
  
    function fib(n: number): number {
      if (n <= 1) {
        return n;
      }
      if (!memo.has(n)) {
        memo.set(n, fib(n - 1) + fib(n - 2));
      }
      return memo.get(n)!;
    }
  
    return fib;
  })();
  
