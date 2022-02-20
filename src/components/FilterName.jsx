export const FilterName = ({ nameSearch, onChange }) => {
  return (
    <div>
      <label>Search by name: </label>
      <input type="text" value={nameSearch} onChange={onChange} />
    </div>
  );
};
