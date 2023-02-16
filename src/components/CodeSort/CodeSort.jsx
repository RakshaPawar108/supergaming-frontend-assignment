export const CodeSort = ({ handleSortOrderChange }) => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Sort By Code:</label>
        <select
          className="ui search dropdown"
          onChange={handleSortOrderChange}
        >
          <option value='DEFAULT'>DEFAULT</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
};
