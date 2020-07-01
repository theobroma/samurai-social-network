import React from 'react';
import shortid from 'shortid';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { ProfileType, ContactsType } from '../../../../@types';

type ContactProps = {
  title: string;
  value: string;
};
const Contact: React.FC<ContactProps> = ({
  title,
  value = 'https://www.facebook.com/',
}) => (
  <li>
    <a href={value} target="_blank">
      {title}
    </a>
  </li>
);

const BlockSocial = (
  <>
    <FaFacebookSquare />
    <Contact
      title="facebook123"
      value="https://www.facebook.com/"
      key={shortid.generate()}
    />
  </>
);

type Props = {
  contacts: ContactsType;
};

const ContactsData: React.FC<Props> = ({ contacts }) => (
  <ul>
    {BlockSocial}
    {contacts &&
      Object.keys(contacts).map((c) => (
        <Contact title={c} value={contacts[c as keyof ContactsType]} key={c} />
      ))}
  </ul>
);
export default ContactsData;
