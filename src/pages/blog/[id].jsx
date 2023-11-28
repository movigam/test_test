import styles from "../../styles/blog.module.css";
import Link from "next/link";

import { useRouter } from "next/navigation";

const BlogId = (props) => {
  const router = useRouter();

  console.log(props);

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.button}>
        {"< 戻る"}
      </Link>
      <h1 className={styles.heading}>{props.title}</h1>
      <time dateTime={props.publishedAt} className={styles.time}>
        {props.publishedAt.substring(0, 10)}
      </time>
      <article
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const response = await fetch(process.env.API_URL + context.query.id, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY,
    },
  });

  const json = await response.json();

  return {
    props: json,
  };
};

export default BlogId;
