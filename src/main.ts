// main.ts

document.addEventListener('DOMContentLoaded', () => {
  const calcButton = document.getElementById('calcButton') as HTMLButtonElement;
  const fibInput = document.getElementById('fibInput') as HTMLInputElement;
  const memoizedResultDiv = document.getElementById('memoizedResult') as HTMLDivElement;
  const recursiveResultDiv = document.getElementById('recursiveResult') as HTMLDivElement;

  const cache = new Map<number, number>();

  calcButton.addEventListener('click', () => {
    const number = parseInt(fibInput.value, 10);
    if (isNaN(number) || number < 0) {
      memoizedResultDiv.style.display = 'block';
      memoizedResultDiv.className = 'alert alert-danger';
      memoizedResultDiv.textContent = 'Por favor, introduce un número válido.';
      return;
    }

    // Memoized Fibonacci
    const startMemoized = performance.now();
    const fibResultMemoized = memoizedFibonacci(number, cache);
    const endMemoized = performance.now();

    // Update the memoizedResultDiv with memoized result immediately
    memoizedResultDiv.className = 'alert alert-success';
    memoizedResultDiv.style.display = 'block';
    memoizedResultDiv.innerHTML = `El resultado memoizado de Fibonacci para ${number} es ${fibResultMemoized} (calculado en ${(endMemoized - startMemoized).toFixed(2)} ms).`;

    // Recursive Fibonacci (this will be processed while the memoized result is already displayed)
    setTimeout(() => {
      const startRecursive = performance.now();
      const fibResultRecursive = recursiveFibonacci(number);
      const endRecursive = performance.now();

      recursiveResultDiv.className = 'alert alert-success';
      recursiveResultDiv.style.display = 'block';
      recursiveResultDiv.innerHTML = `El resultado recursivo de Fibonacci para ${number} es ${fibResultRecursive} (calculado en ${(endRecursive - startRecursive).toFixed(2)} ms).`;
    }, 0);
  });
});

function memoizedFibonacci(n: number, cache: Map<number, number>): number {
  if (cache.has(n)) {
    return cache.get(n)!;
  }

  if (n <= 1) {
    cache.set(n, n);
    return n;
  }

  const result = memoizedFibonacci(n - 1, cache) + memoizedFibonacci(n - 2, cache);
  cache.set(n, result);
  return result;
}

function recursiveFibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
