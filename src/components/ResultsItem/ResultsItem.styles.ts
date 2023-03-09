import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  flex: 0 0 100%;
  padding: ${(props) => props.theme.layout.paddingDesktop / 10}rem ${(props) => props.theme.layout.paddingDesktop / 10}rem 10.4rem;
  border-radius: 2rem;
  border: 3px solid ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.colorMono.white};
  transition: ${(props) => props.theme.layout.transition};
  animation: fadein 2s 1;
  &:hover {
    border-color: ${(props) => props.theme.color.tertiary};
    animation: wiggle 2s linear 2s, fadein 0s 0;
  }

  @media (min-width: 500px) {
    padding: 6rem 3rem 3rem;
  }
  @media (min-width: 1000px) {
    flex-basis: calc((100% / 2) - 1.5rem);
  }
  @media (min-width: 1600px) {
    flex-basis: calc((100% / 3) - 2rem);
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-4deg);
    }
    20% {
      transform: rotateZ(3deg);
    }
    25% {
      transform: rotateZ(-4deg);
    }
    30% {
      transform: rotateZ(1deg);
    }
    35% {
      transform: rotateZ(-3deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  text-transform: uppercase;
  margin-bottom: 2rem;
  word-break: break-word;
`;

const OwnerLink = styled.a`
  display: inline-block;
  padding-bottom: .1rem;
  background-image: linear-gradient(${(props) => props.theme.color.quaternary} 0 0);
  background-position: 0 100%;
  background-size: 0 .2rem;
  background-repeat: no-repeat;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  transition: background-size .3s, background-position 0s .3s;
  &:hover {
    background-position: 100% 100%;
    background-size: 100% .2rem;
  }
`;

const DetailsWrapper = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem ${(props) => props.theme.layout.paddingDesktop / 10}rem;
  border-radius: 0 0 2rem 2rem;
  background: ${(props) => props.theme.colorOthers.gray};
  list-style: none;

  @media (min-width: 500px) {
    top: 0;
    bottom: auto;
    display: flex;
    gap: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
    border-radius: 2rem 2rem 0 0;
  }
`;

const DetailsItem = styled.li`
  display: flex;
  gap: .5rem;

  @media (min-width: 500px) {
    &:not(:last-of-type)::after {
      content: '';
      margin-left: .5rem;
      border-left: .2rem solid ${(props) => props.theme.colorGray.black24};
    }
  }
`;

const TextWrapper = styled.p`
  word-break: break-word;
  margin-bottom: 2rem;
`;

export {
  Wrapper,
  Title,
  OwnerLink,
  DetailsWrapper,
  DetailsItem,
  TextWrapper
};
