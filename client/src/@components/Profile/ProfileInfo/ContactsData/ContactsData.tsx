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
import {
  ContactsColorsEnum,
  ContactsKeys,
  ContactsType,
} from '../../../../@types';

type ContactProps = {
  title: ContactsKeys;
  value: string;
};

const Contact: React.FC<ContactProps> = ({ title, value = '', children }) => (
  <li>
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      style={{ cursor: 'pointer' }}
    >
      <span className="mr-2" style={{ color: ContactsColorsEnum[title] }}>
        {children}
      </span>
      <span className="text-secondary">{title}</span>
    </a>
  </li>
);

type Props = {
  contacts: ContactsType;
};

export const ContactsData: React.FC<Props> = ({ contacts }) => {
  const BlockSocial = (
    <StyledSocialList>
      {contacts && (
        <>
          <Contact
            title="github"
            value={contacts.github}
            key={shortid.generate()}
          >
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
        </>
      )}
    </StyledSocialList>
  );
  return (
    <>
      <div className="option-subheading mb-3">Social links</div>
      {BlockSocial}
    </>
  );
};
