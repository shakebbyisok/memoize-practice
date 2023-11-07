import { recursiveFib, memoizedFib } from '../src/memoize';

describe('Fibonacci functions', () => {
  // ... other tests ...

  it('should calculate Fibonacci numbers recursively', () => {
    expect(recursiveFib(10)).toBe(55); // example for simple test
  });

  it('should calculate Fibonacci numbers with memoization', () => {
    // Time non-memoized recursive call for benchmarking
    const nonMemoizedStart = performance.now();
    const nonMemoizedResult = recursiveFib(30);
    const nonMemoizedEnd = performance.now();

    // Time first call to memoized function
    const firstMemoizedStart = performance.now();
    const firstMemoizedResult = memoizedFib(30);
    const firstMemoizedEnd = performance.now();

    // Time second call to memoized function (should be instant or near-instant due to memoization)
    const secondMemoizedStart = performance.now();
    const secondMemoizedResult = memoizedFib(30);
    const secondMemoizedEnd = performance.now();

    const nonMemoizedDuration = nonMemoizedEnd - nonMemoizedStart;
    const firstMemoizedDuration = firstMemoizedEnd - firstMemoizedStart;
    const secondMemoizedDuration = secondMemoizedEnd - secondMemoizedStart;

    console.log(`Non-memoized call took ${nonMemoizedDuration.toFixed(3)} ms`);
    console.log(`First memoized call took ${firstMemoizedDuration.toFixed(3)} ms`);
    console.log(`Second memoized call took ${secondMemoizedDuration.toFixed(3)} ms`);

    // Validate the results are as expected
    expect(nonMemoizedResult).toBe(firstMemoizedResult);
    expect(firstMemoizedResult).toBe(secondMemoizedResult);

    // The second memoized call should be significantly faster than the first memoized call
    expect(secondMemoizedDuration).toBeLessThan(firstMemoizedDuration);

    // For thoroughness, check that the first memoized call isn't slower than the non-memoized call by an unexpected margin
    expect(firstMemoizedDuration).toBeLessThan(nonMemoizedDuration * 10); // Adjust the multiplier as necessary for your use case
  });
});
