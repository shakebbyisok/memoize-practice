
# Práctica de Memoización de Fibonacci

Este repositorio se centra en la implementación de una función de memoización para la secuencia de Fibonacci utilizando TypeScript y pruebas unitarias. Además, incluye una Interfaz de Línea de Comandos (CLI) y una interfaz de usuario front-end para demostrar y probar su funcionalidad en tiempo real.

## Características

- **Memoización de Fibonacci**: Implementa una técnica de memoización para mejorar drásticamente la eficiencia del cálculo de la secuencia de Fibonacci.
- **Comparación de Rendimiento**: La práctica permite comparar directamente el rendimiento entre la implementación estándar y la memoizada.
- **CLI**: Una herramienta de línea de comandos para interactuar con la función de Fibonacci y observar los beneficios de la memoización.
- **Interfaz Front-end**: Permite a los usuarios calcular valores de la secuencia de Fibonacci y muestra el resultado y si se recuperó de la caché.

![Ejemplo en CLI:](https://imgur.com/a/RSozo0d)

## Diferencias en Rendimiento

Sin memoización, la función de Fibonacci calcula valores de forma recursiva sin almacenar ningún resultado previo. Esto significa que para calcular `fib(n)`, también se calculan todos los valores previos de `fib(n-1)`, `fib(n-2)`, ..., `fib(1)` repetidas veces. Con un aumento exponencial en las llamadas a función, el tiempo de ejecución crece dramáticamente con cada incremento en `n`.

Con memoización, una vez que se calcula un valor de Fibonacci, se almacena en una caché. Las sucesivas llamadas a `fib(n)` pueden devolver inmediatamente el valor almacenado sin recálculo, lo que reduce la complejidad de tiempo de O(2^n) a O(n). Esto hace que calcular valores grandes como `fib(50)` o `fib(3000)` sea prácticamente instantáneo, mientras que sin memoización, podrían ser inmanejables.

## Cómo ejecutar

Sigue estos pasos para ejecutar el proyecto:

1. **Clona este repositorio en tu máquina local**:

   ```
   git clone https://github.com/shakebbyisok/memoize-practice.git
   ```
   
2. **Entra al directorio correcto**:
   ```
   cd memoize-practice
   ```
   
3. **Instalación de dependencias**:
   ```
   npm install
   ```
   
4. **Ejecutar las pruebas**:
   ```
   npm test
   ```
   
5. **Iniciar la CLI**:
   ```
   npm start
   ``` 

6. **Ver la funcionalidad en el front-end**:
Abre el archivo `index.html` en un navegador, preferentemente con un servidor local como `live-server`.

(En el front-end, puedes observar los resultados instantáneos y si la respuesta fue recuperada de la caché).

### Notas Adicionales
- La implementación de la memoización muestra ventajas significativas en términos de rendimiento cuando se calculan números grandes.
- Se añade la duración del cálculo en la salida, mostrando la efectividad de la memoización con respecto al tiempo de ejecución.

