import React from 'react'
import { Container, Button, Title } from 'bloomer'
import Link from 'gatsby-link'

const IndexPage = () => (
  <Container hasTextAlign="centered">
    <Title className="logo" isSize="1">
      zkopru
    </Title>
    <p className="description">
      Ethereum L2 scaling solution for private
      <br />
      transactions using zk-SNARK and optimistic rollup.
    </p>
    <br />
    <br />
    <Link to="/playground/">
      <Button isColor="white" isOutlined>
        Go to playground
      </Button>
    </Link>
  </Container>
)

export default IndexPage
