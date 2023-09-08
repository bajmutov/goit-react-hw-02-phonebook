const ContactList = ({ userContacts, handleDelete }) => {
  return (
    <ul>
      {userContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            className="btn-close"
            onClick={() => handleDelete(id)}
          >
            {' '}
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
