import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Contact } from '../contact/Contact'
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider />
      <br />
      <SectionTitle id='contact'>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>📱 Call</LinkTitle>
          <LinkItem href="tel:+91-7083991254">+91-7083991254</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>✉️ Email</LinkTitle>
          <LinkItem href="mailto:rohan.thengil25@gmail.com">
          rohan.thengil25@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <Contact />
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Ronnie257" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/rohan-thengil-8602861a3/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
