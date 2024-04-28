import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import styles from "./index.module.css";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className={styles.main}>
      {hello ? hello.greeting : "Loading tRPC query..."}
    </main>
  );
}
