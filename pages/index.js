import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Landing() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/home",
      },
    };
  }

  return {
    props: { session },
  };
}
