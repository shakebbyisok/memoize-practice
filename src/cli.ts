import { memoizedFib } from './memoize.js';
import * as readline from 'readline';

// Crear una interfaz de readline para interactuar con la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para pedir un número recursivamente
function askForNumber(): void {
  rl.question('Ingrese un número para la secuencia de Fibonacci (escriba "salir" para terminar): ', (input) => {
    if (input.trim().toLowerCase() === 'salir') {
      rl.close(); // Cerrar la interfaz si el usuario desea salir
      return;
    }

    const num = parseInt(input, 10);
    if (!isNaN(num) && num >= 0) {
        console.log('\x1b[32m', `Fibonacci de ${num} es ${memoizedFib(num)}`, '\x1b[0m');
    } else {
      console.log('Por favor, ingrese un número entero no negativo válido.');
    }

    // Pedir otro número
    askForNumber();
  });
}

// Comenzar pidiendo un número
askForNumber();

// Evento de cierre para la interfaz readline
rl.on('close', () => {
  console.log('¡Adiós, Juan Carlos:D!');
  process.exit(0);
});
