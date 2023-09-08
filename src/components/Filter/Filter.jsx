const Filter = ({ changeFilter, value }) => {
  return (
    <div>
      <label htmlFor="findContact" className="form-label">
        Find contacts by name
      </label>
      <input
        name="title"
        type="text"
        onChange={changeFilter}
        value={value}
        className="form-control"
        id="findContact"
      />
    </div>
  );
};

export default Filter;
