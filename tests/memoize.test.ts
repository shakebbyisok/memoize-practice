import { memoize, fib } from '../src/memoize';

describe('memoize function', () => {
  // ... other tests ...

  it('should correctly memoize the Fibonacci function', () => {
    const memoizedFib = memoize(fib);

    // Time non-memoized call for benchmarking
    const nonMemoizedStart = performance.now();
    fib(30);
    const nonMemoizedEnd = performance.now();

    // Time first call to memoized function (not expected to be faster)
    const firstCallStart = performance.now();
    memoizedFib(30);
    const firstCallEnd = performance.now();

    // Time second call to memoized function (should be faster)
    const secondCallStart = performance.now();
    memoizedFib(30);
    const secondCallEnd = performance.now();

    const nonMemoizedDuration = nonMemoizedEnd - nonMemoizedStart;
    const firstCallDuration = firstCallEnd - firstCallStart;
    const secondCallDuration = secondCallEnd - secondCallStart;

    console.log(`Non-memoized call took ${nonMemoizedDuration} ms`);
    console.log(`First memoized call took ${firstCallDuration} ms`);
    console.log(`Second memoized call took ${secondCallDuration} ms`);

    // The second memoized call should be faster than the non-memoized call
    expect(secondCallDuration).toBeLessThan(nonMemoizedDuration);
  });
});
