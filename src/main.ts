// main.ts

document.addEventListener('DOMContentLoaded', () => {
    const calcButton = document.getElementById('calcButton') as HTMLButtonElement;
    const fibInput = document.getElementById('fibInput') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    const timeDiv = document.getElementById('timeTaken') as HTMLDivElement; // Div para mostrar el tiempo
    const cacheDiv = document.getElementById('cacheHit') as HTMLDivElement; // Div para mostrar si es de caché
  
    const cache = new Map<number, number>();
  
    calcButton.addEventListener('click', () => {
      const number = parseInt(fibInput.value, 10);
      if (isNaN(number) || number < 0) {
        resultDiv.style.display = 'block';
        resultDiv.className = 'alert alert-danger';
        resultDiv.textContent = 'Por favor, introduce un número válido.';
        return;
      }
  
      const start = performance.now();
      let fromCache = false;
      let fibResult: number;
  
      if (cache.has(number)) {
        fibResult = cache.get(number) as number;
        fromCache = true;
      } else {
        fibResult = fibonacci(number);
        cache.set(number, fibResult);
      }
  
      const end = performance.now();
  
      resultDiv.className = 'alert alert-success';
      resultDiv.style.display = 'block';
      resultDiv.textContent = `El resultado de Fibonacci para ${number} es ${fibResult}`;
  
      timeDiv.style.display = 'block';
      timeDiv.style.color = 'orange';
      timeDiv.textContent = `Cálculo realizado en ${(end - start).toFixed(2)} ms.`;
  
      if (fromCache) {
        cacheDiv.style.display = 'block';
        cacheDiv.style.color = 'purple';
        cacheDiv.textContent = 'Resultado obtenido de la caché.';
      } else {
        cacheDiv.style.display = 'none';
      }
    });
  });
  
  function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
