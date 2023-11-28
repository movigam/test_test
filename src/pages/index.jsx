import styles from "../styles/home.module.css";

import Link from "next/link";

const Home = (props) => {
  const contents = props.contents ?? [];
  const totalCount = props.totalCount ?? 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>

      <p className={styles.totalCount}>{`記事の総数: ${totalCount} 件`}</p>

      <ul className={styles.list}>
        {contents.map((content) => (
          <li key={content.id} className={styles.listItem}>
            <Link href={`/blog/${content.id}`} className={styles.link}>
              {content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.API_URL, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY,
    },
  });

  const json = await response.json();

  return {
    props: json,
  };
};

export default Home;
