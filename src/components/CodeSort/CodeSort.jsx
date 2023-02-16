export const CodeSort = () => {
  return (
    <div class="ui form">
      <div class="field">
        <label>Sort By Code:</label>
        <select className="ui search dropdown" value="DEFAULT">
          <option value="">DEFAULT</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
};
