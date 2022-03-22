import { Head, BlitzLayout, Routes, Link, useMutation } from "blitz"
import { Suspense } from "react"
import { Anchor, Header, Footer, Main, Button, Text, Nav } from "grommet"
import { Add, Login, Home } from "grommet-icons"
import { useCurrentUser } from "../hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <div>
          User id: <code>{currentUser.id}</code>
          User role: <code>{currentUser.role}</code>
        </div>
        <Button
          primary
          label="Log Out"
          onClick={async () => {
            await logoutMutation()
          }}
        />
      </>
    )
  } else {
    return (
      <>
        <Nav direction="row" background="brand">
          <Link href={Routes.SignupPage()}>
            <Anchor icon={<Add />} hoverIndicator />
          </Link>
          <Link href={Routes.LoginPage()}>
            <Anchor icon={<Login />} hoverIndicator />
          </Link>
        </Nav>
      </>
    )
  }
}

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  //const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>{title || "SZUPA"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header background="brand">
        <Link href={Routes.Home()}>
          <Button icon={<Home />} hoverIndicator />
        </Link>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </Header>
      <Main>{children}</Main>
      <Footer background="brand" pad="medium">
        <Text>CopyRight</Text>
        <Anchor label="about" />
      </Footer>
    </>
  )
}

export default Layout
