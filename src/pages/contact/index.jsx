import styles from "../../styles/contact.module.css";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    // name の入力値を取得しよう！
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const message = form.get("message") || "";

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name の入力値をリクエストに含めよう！
        nema: name,
        email: email,
        message: message,
      }),
    });
    const data = await res.json();
    alert(data.message);
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          <span>name</span>
          <input
            type="text"
            name="name"
            placeholder="your name"
            defaultValue=""
            className={styles.input}
          />
        </label>

        <label htmlFor="email">
          <span>mail</span>
          <input
            type="email"
            name="email"
            placeholder="your email"
            defaultValue=""
            className={styles.input}
          />
        </label>

        <label htmlFor="message">
          <span>message</span>
          <textarea
            name="message"
            placeholder="your message"
            rows={4}
            defaultValue=""
            className={styles.textarea}
          />
        </label>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
