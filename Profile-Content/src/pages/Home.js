import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">WELCOME TO MY WEBSITE</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
        doloremque aliquid iusto consectetur eius? Iste in autem ad facilis
        delectus laborum nihil tempore earum. Iure molestias nam laudantium
        recusandae?
      </p>
    </section>
  );
}
