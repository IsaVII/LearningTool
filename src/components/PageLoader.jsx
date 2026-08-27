/**
 * Suspense fallback for the lazy-loaded page routes in App.jsx. Kept tiny
 * and dependency-free since it only flashes briefly while a route's chunk
 * downloads (usually imperceptible on a warm cache).
 */
function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex items-center justify-center py-24 text-muted"
    >
      <svg
        className="animate-spin h-6 w-6 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
        />
      </svg>
      Loading…
    </div>
  );
}

export default PageLoader;
