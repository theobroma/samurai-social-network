import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
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
  value: string | null;
};

const Contact: React.FC<ContactProps> = ({ title, value, children }) => {
  const val = value || '';
  return (
    <li>
      <span className="mr-2" style={{ color: ContactsColorsEnum[title] }}>
        {children}
      </span>
      <span className="text-secondary mr-3">{title}</span>
      <a
        href={val}
        target="_blank"
        rel="noopener noreferrer"
        style={{ cursor: 'pointer' }}
      >
        <span className="text-secondary">{val}</span>
      </a>
    </li>
  );
};

type Props = {
  contacts: ContactsType;
};

export const ContactsData: React.FC<Props> = ({ contacts }) => {
  const BlockSocial = (
    <StyledSocialList>
      {contacts && (
        <>
          <Contact title="github" value={contacts.github} key={nanoid()}>
            <FaGithub />
          </Contact>
          <Contact title="vk" value={contacts.vk} key={nanoid()}>
            <FaVk />
          </Contact>
          <Contact title="facebook" value={contacts.facebook} key={nanoid()}>
            <FaFacebook />
          </Contact>
          <Contact title="instagram" value={contacts.instagram} key={nanoid()}>
            <FaInstagram />
          </Contact>
          <Contact title="twitter" value={contacts.twitter} key={nanoid()}>
            <FaTwitter />
          </Contact>
          <Contact title="website" value={contacts.website} key={nanoid()}>
            <FaGlobe />
          </Contact>
          <Contact title="youtube" value={contacts.youtube} key={nanoid()}>
            <FaYoutube />
          </Contact>
          <Contact title="mainLink" value={contacts.mainLink} key={nanoid()}>
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
