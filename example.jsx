export function Example() {
  return (
    <>
      <span className="absolute right-1 flex size-100 items-center justify-center">
        Hello world 1!
      </span>

      <span
        className={`
        absolute right-1 flex size-100 items-center justify-center
      `}
      >
        Hello world 2!
      </span>

      {/* eslint-disable-next-line better-tailwindcss/enforce-consistent-line-wrapping -- stabilizing output*/}
      <span className="absolute right-1 flex size-100 items-center justify-center">
        Hello world 3!
      </span>
    </>
  );
}
