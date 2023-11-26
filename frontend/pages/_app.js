import "@/styles/globals.css";
import { Kosugi_Maru } from "next/font/google";
import { SessionProvider } from "next-auth/react";

// If loading a variable font, you don't need to specify the font weight
const Kosugimaru = Kosugi_Maru({ weight: "400", subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className={Kosugimaru.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
