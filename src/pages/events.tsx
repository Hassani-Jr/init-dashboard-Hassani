export default function Events() {
  return (
    <main className="min-h-screen justify-between">
      <div>
        <h1 className="text-3xl text-white">Upcoming Events</h1>
        <button
          type="button"
          className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
        >
          Add Event
        </button>
        <Search />
      </div>
    </main>
  );
}

function Search() {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search for events..."
          required
        />
        <button
          type="submit"
          className="bg-primary_yellow absolute bottom-2.5 right-2.5 rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
