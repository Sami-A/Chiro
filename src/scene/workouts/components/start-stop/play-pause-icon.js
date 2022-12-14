export const PlayPauseIcon = ({ path }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={.5}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
