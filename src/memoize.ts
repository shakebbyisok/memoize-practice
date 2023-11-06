export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();

    return function(this: any, ...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('\x1b[36m', `Resultado obtenido de la caché para los argumentos: ${key}`, '\x1b[0m');
            return cache.get(key)!;
        } else {
            console.log('\x1b[91m%s\x1b[0m', `Calculando por primera vez para los argumentos: ${key}`);
            const start = performance.now();
            const result = fn.apply(this, args);
            const end = performance.now();
            console.log('\x1b[33m', `Cálculo realizado en ${(end - start).toFixed(2)} ms.`, '\x1b[0m');
            cache.set(key, result);
            return result;
        }
    } as T;
}

// Implementación recursiva del cálculo de Fibonacci
export const fib = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

// Versión memorizada de la función de Fibonacci
export const memoizedFib = memoize(fib);
