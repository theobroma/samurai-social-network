import React from 'react';
import shortid from 'shortid';
import {
  FaInstagram,
  FaGlobe,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaLink,
  FaVk,
  FaFacebook,
} from 'react-icons/fa';
import { ProfileType, ContactsType } from '../../../../@types';

type ContactProps = {
  title: string;
  value: string;
};
const Contact: React.FC<ContactProps> = ({ title, value = '' }) => (
  <li>
    <a href={value} target="_blank">
      {title}
    </a>
  </li>
);

type Props = {
  contacts: ContactsType;
};

const ContactsData: React.FC<Props> = ({ contacts }) => {
  const BlockSocial = (
    <>
      <FaGithub />
      <Contact
        title="github"
        value={contacts.github}
        key={shortid.generate()}
      />
      <FaVk />
      <Contact title="vk" value={contacts.vk} key={shortid.generate()} />
      <FaFacebook />
      <Contact
        title="facebook"
        value={contacts.facebook}
        key={shortid.generate()}
      />
      <FaInstagram />
      <Contact
        title="instagram"
        value={contacts.instagram}
        key={shortid.generate()}
      />
      <FaTwitter />
      <Contact
        title="twitter"
        value={contacts.twitter}
        key={shortid.generate()}
      />
      <FaGlobe />
      <Contact
        title="website"
        value={contacts.website}
        key={shortid.generate()}
      />
      <FaYoutube />
      <Contact
        title="youtube"
        value={contacts.youtube}
        key={shortid.generate()}
      />
      <FaLink />
      <Contact
        title="mainLink"
        value={contacts.mainLink}
        key={shortid.generate()}
      />
    </>
  );
  return (
    <ul>
      {contacts && BlockSocial}
      {/* {contacts &&
        Object.keys(contacts).map((c) => (
          <Contact
            title={c}
            value={contacts[c as keyof ContactsType]}
            key={c}
          />
        ))} */}
    </ul>
  );
};
export default ContactsData;
