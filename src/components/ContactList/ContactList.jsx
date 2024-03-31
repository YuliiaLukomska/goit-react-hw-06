import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, filters) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filters = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filters);

  return (
    <ul className={css.contactListWrapper}>
      {visibleContacts !== null &&
        visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
