import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import LogoImage from 'images/logo-light.svg';
import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from 'images/youtube-icon.svg';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-9.svg';

const Container = tw.div`relative bg-primary-500 text-gray-100 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/blog">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/help">Ajuda</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about">Sobre n??s</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Nossos servi??os</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Log In</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Freelancers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Empreendedores</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Time</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Imprensa</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Logos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Eventos</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Hist??rias</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Escrit??rio</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Time</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Carreira</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Nosso fundador</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Cultura</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Trabalhe conosco</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/policy">Pol??ticas de Privacidade</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/terms">Termos de Servi??o</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; Gabiz LLc</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
