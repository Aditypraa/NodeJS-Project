import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">Halo Ini adalah halaman prifleku </p>
    </section>
  );
}
