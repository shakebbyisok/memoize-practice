
# Práctica de Memoización de Fibonacci

Este repositorio se centra en la implementación de una función de memoización para la secuencia de Fibonacci utilizando TypeScript y pruebas unitarias. Además, incluye una Interfaz de Línea de Comandos (CLI) y una interfaz de usuario front-end para demostrar y probar su funcionalidad en tiempo real.

## Características

- **Memoización de Fibonacci**: Mejora la eficiencia del cálculo de la secuencia de Fibonacci mediante el almacenamiento de resultados previos.
- **CLI**: Una herramienta de línea de comandos que permite a los usuarios interactuar con la función de Fibonacci y observar los beneficios de la memoización.
- **Interfaz Front-end**: Una página web sencilla que permite a los usuarios introducir un número y calcular su correspondiente valor en la secuencia de Fibonacci, mostrando tanto el resultado como si el cálculo fue obtenido de la caché.

![Ejemplo en CLI:](https://i.imgur.com/3Knn9Mw.jpg)



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
- A partir del número 40, el sistema tarda en procesar el resultado.
- He añadido la duración del cálculo, y también se indica si el resultado se ha obtenido de la memoria caché, tanto en la CLI como en el front-end.
