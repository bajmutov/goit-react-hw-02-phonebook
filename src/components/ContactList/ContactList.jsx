const ContactList = ({ userContacts }) => {
  return (
    <ul>
      {userContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
