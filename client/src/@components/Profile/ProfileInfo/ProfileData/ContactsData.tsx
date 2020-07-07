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
import { StyledSocialList } from './Styled';
import { ContactsType } from '../../../../@types';

type ContactProps = {
  title: string;
  value: string;
};
const Contact: React.FC<ContactProps> = ({ title, value = '', children }) => (
  <li>
    <a href={value} target="_blank">
      <span className="mr-2">{children}</span>
      {title}
    </a>
  </li>
);

type Props = {
  contacts: ContactsType;
};

const ContactsData: React.FC<Props> = ({ contacts }) => {
  const BlockSocial = (
    <StyledSocialList>
      <Contact title="github" value={contacts.github} key={shortid.generate()}>
        <FaGithub />
      </Contact>
      <Contact title="vk" value={contacts.vk} key={shortid.generate()}>
        <FaVk />
      </Contact>
      <Contact
        title="facebook"
        value={contacts.facebook}
        key={shortid.generate()}
      >
        <FaFacebook />
      </Contact>
      <Contact
        title="instagram"
        value={contacts.instagram}
        key={shortid.generate()}
      >
        <FaInstagram />
      </Contact>
      <Contact
        title="twitter"
        value={contacts.twitter}
        key={shortid.generate()}
      >
        <FaTwitter />
      </Contact>
      <Contact
        title="website"
        value={contacts.website}
        key={shortid.generate()}
      >
        <FaGlobe />
      </Contact>
      <Contact
        title="youtube"
        value={contacts.youtube}
        key={shortid.generate()}
      >
        <FaYoutube />
      </Contact>
      <Contact
        title="mainLink"
        value={contacts.mainLink}
        key={shortid.generate()}
      >
        <FaLink />
      </Contact>
    </StyledSocialList>
  );
  return (
    <>
      <div className="option-subheading mb-3">Social links</div>
      {contacts && BlockSocial}
    </>
  );
};
export default ContactsData;
