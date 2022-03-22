import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading, Box } from "grommet"

const Home: BlitzPage = () => {
  return (
    <Box>
      <Heading>SZUPA</Heading>
    </Box>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>
//Home.authenticate = true

export default Home
