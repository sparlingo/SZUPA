import { useEffect } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Container, Heading } from "@chakra-ui/react"

const Home: BlitzPage = () => {
  return (
    <Container>
      <main>
        <Heading as="h1" size="2xl">
          SZUPA
        </Heading>
      </main>
    </Container>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>
//Home.authenticate = true

export default Home
