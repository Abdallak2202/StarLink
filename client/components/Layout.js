import { UserProvider } from "lib/authContext";
import Head from "next/head";


const Layout = ({ user, loading = false,children}) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>Film Database</title>
    </Head>
        <div className="text-2xl font-medium">{children}</div>
  </UserProvider>
);
export default Layout;