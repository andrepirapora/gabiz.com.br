import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithInput.js';
import Features from 'components/features/ThreeColWithSideImage.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton.js';
import FeatureWithSteps from 'components/features/TwoColWithSteps.js';
import Pricing from 'components/pricing/ThreePlans.js';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndRating.js';
import FAQ from 'components/faqs/SingleCol.js';
import GetStarted from 'components/cta/GetStarted';
import Footer from 'components/footers/FiveColumnWithBackground.js';
import heroScreenshotImageSrc from 'images/hero-screenshot-1.png';
import macHeroScreenshotImageSrc from 'images/hero-screenshot-2.png';
import prototypeIllustrationImageSrc from 'images/prototype-illustration.svg';
import { ReactComponent as BriefcaseIcon } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as MoneyIcon } from 'feather-icons/dist/icons/dollar-sign.svg';

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Nós conectamos você com o <HighlightedText>Futuro.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            Estamos sempre pensando em{' '}
            <HighlightedText>Inovação.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: 'Econômico',
            description:
              'Escolha o freelancer que cabe no seu orçamento, sem perder a qualidade do serviço.',
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: 'Profissionalismo',
            description:
              'Nossos freelancers sempre prestarão o melhor serviço para você, pode confiar!',
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />

      <Testimonial
        subheading={<Subheading>Comentários</Subheading>}
        heading={
          <>
            Nossos clientes <HighlightedText>nos amam.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              'https://images.unsplash.com/photo-1653256228007-6a3435133f13?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736',
            heading: 'Experiência fantástica com o Gabiz',
            quote:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            customerName: 'Carla Rafaela',
            customerTitle: 'Designer, Pirapora MG.',
          },
          {
            stars: 5,
            profileImageSrc:
              'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
            heading: 'Bom tratamento com os freelancers!',
            quote:
              'Sou técnico em informática e procurei o Gabiz para melhorar os meus ganhos, me atenderam super bem quando tive problemas, além da facilidade de mexer no aplicativo, eu consigo incrementar minha renda.',
            customerName: 'Flávio Santos',
            customerTitle: 'Técnico em informática, São Paulo SP.',
          },
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            Você tem <HighlightedText>perguntas?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: 'Are all the templates easily customizable ?',
            answer:
              'Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question:
              'How long do you usually support an standalone template for ?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question: 'What kind of payment methods do you accept ?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question:
              'Is there a subscribption service to get the latest templates ?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question: 'Are the templates compatible with the React ?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            question: 'Do you really support Internet Explorer 11 ?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
