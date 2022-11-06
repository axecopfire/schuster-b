import React from "react";
import styles from "./styles.module.css";

const links = [
  {
    title: "permacomputing",
    description:
      "I found this perusing HackerNews. An article that expresses the connection between computing and the sciences. The effort to build technology with the least amount of waste.",
    href: "http://viznut.fi/texts-en/permacomputing.html",
  },
  {
    title: "The Fable of the Dragon-Tyrant",
    description:
      "Linked to Vitalik Buterin's Twitter account (here's the <a href=\"https://www.youtube.com/watch?v=cZYNADOHhVY\">Youtube version</a>). It is a fable that helps motivate me to continue dreaming of the future.",
    href: "https://nickbostrom.com/fable/dragon",
  },
];

export default function CoolLinks() {
  return (
    <section className={styles.links}>
      <h2>Links I like</h2>
      <ul>
        {links.map((link) => (
          <li>
            <h3>{link.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: link.description }}></p>
            <a href={link.href}>{link.href}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
