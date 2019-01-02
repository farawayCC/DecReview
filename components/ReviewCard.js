import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'
import { Link } from '../routes'

export default props => {
  const finalElement = (
    <Grid >
      <Link route={`/products/${props.address}/reviews/${props.index}`}>
        <a>
          <Grid.Column width={4}>
              <Image src={props.review.images} />
          </Grid.Column>

          <Grid.Column width={12}>
            <Header as='h1'>
                <a>{props.review.header}</a>
            </Header>
            <Rating icon='star' defaultRating={props.review.rates} maxRating={5} disabled />
            <Header as='h3'>{props.review.texts}</Header>
            <Header as='h3' >Author address: {props.review.creators}</Header>
          </Grid.Column>
      </a>
      </Link>
    </Grid>
  );
  return finalElement;
};