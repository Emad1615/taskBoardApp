function SearchQuery({ query, setQuery, width = 'w-1/2' }) {
  return (
    <div>
      <input
        className={`${width} rounded bg-slate-500 p-2`}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        placeholder="Search by task title or tags"
      />
    </div>
  );
}

export default SearchQuery;
