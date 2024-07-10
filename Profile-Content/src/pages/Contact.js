import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">Ini adalah halaman contact :</p>
      <ul>
        <li>WA : 08134xxxxxx</li>
        <li>Email : aditypraa@gmail.com</li>
      </ul>
      <p className="section-description">Social Media :</p>
      <ul>
        <li>
          <a href="https://">Facebook</a>
        </li>
        <li>
          <a href="https://">Instagram</a>
        </li>
      </ul>
    </section>
  );
}
