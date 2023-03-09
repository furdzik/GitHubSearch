import React from 'react';

import Button from 'components/Button';

import {
  Wrapper,
  Title,
  OwnerLink,
  DetailsWrapper,
  DetailsItem,
  TextWrapper
} from './ResultsItem.styles';

export interface ResultsItemProps {
  id: number;
  name: string;
  description: string;
  url: string;
  topics: string[];
  owner: string;
  ownerUrl: string;
  forks: number;
  stars: number;
}

const ResultsItem = (props: ResultsItemProps): JSX.Element => (
  <Wrapper>
    <DetailsWrapper>
      <DetailsItem>
        Owner:
        <OwnerLink href={props.ownerUrl}>
          {props.owner}
        </OwnerLink>
      </DetailsItem>
      {
        props.stars ? (
          <DetailsItem>
            Stars:
            <b>
              {props.stars}
            </b>
          </DetailsItem>
        ) : null
      }
      {
        props.forks ? (
          <DetailsItem>
            Forks:
            <b>
              {props.forks}
            </b>
          </DetailsItem>
        ) : null
      }
    </DetailsWrapper>
    {
      props.name ? (
        <Title>
          {props.name}
        </Title>
      ) : null
    }
    {
      props.description ? (
        <TextWrapper
          dangerouslySetInnerHTML={{
            __html: props.description
          }}
        />
      ) : null
    }
    <Button
      component="outside-link"
      variant="secondary"
      href={props.url}
      target="_blank"
    >
      See repository
    </Button>
  </Wrapper>
);

export default ResultsItem;
