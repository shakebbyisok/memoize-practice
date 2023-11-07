import { recursiveFib, memoizedFib } from '../src/memoize.js';
import * as readline from 'readline';
import { performance } from 'perf_hooks';

// Crear una interfaz de readline para interactuar con la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatTime(milliseconds: number): string {
  return `${milliseconds.toFixed(3)} ms`;
}

// Función para pedir un número y calcular Fibonacci de diferentes maneras
function askForNumber(): void {
  rl.question('\nIngrese un número para la secuencia de Fibonacci (escriba "salir" para terminar):\n', (input) => {
    if (input.trim().toLowerCase() === 'salir') {
      rl.close();
      return;
    }

    const num = parseInt(input, 10);
    if (!isNaN(num) && num >= 0) {
      let startTime, endTime;

      // Calcular y mostrar el resultado de la versión memoizada
      startTime = performance.now();
      const memoizedResult = memoizedFib(num);
      endTime = performance.now();
      console.log('\x1b[92m%s\x1b[0m', `Memoized Fibonacci de ${num} es:`);
      console.log('\x1b[96m%s\x1b[0m', `${memoizedResult}`);
      console.log('\x1b[33m%s\x1b[0m', `Calculado en ${formatTime(endTime - startTime)} con memoización.`);

      // Separador visual para los resultados
      console.log('\x1b[90m%s\x1b[0m', '----------------------------------------');

      // Calcular y mostrar la versión simple sin memoización
      console.log('\x1b[91m%s\x1b[0m', 'Calculando Fibonacci de manera recursiva...');
      startTime = performance.now();
      const simpleResult = recursiveFib(num);
      endTime = performance.now();
      console.log('\x1b[36m%s\x1b[0m', `Simple Fibonacci de ${num} es:`);
      console.log('\x1b[96m%s\x1b[0m', `${simpleResult}`);
      console.log('\x1b[33m%s\x1b[0m', `Calculado en ${formatTime(endTime - startTime)} sin memoización.`);

    } else {
      console.log('\x1b[31m%s\x1b[0m', 'Por favor, ingrese un número entero no negativo válido.');
    }

    // Pedir otro número
    askForNumber();
  });
}

// Comenzar pidiendo un número
askForNumber();

// Evento de cierre para la interfaz readline
rl.on('close', () => {
  console.log('\n¡Adiós!');
  process.exit(0);
});
