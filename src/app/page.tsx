"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  getDocs,
  Firestore,
} from "firebase/firestore";

import { db } from "../firebase";

import styles from "./page.module.css";

type Note = {
  id: string;
  author: string;
  text: string;
};

export default function Home() {
  function onSubmit(event: any) {
    console.log("event.target", event.get("name"));

    const data = {
      author: event.get("author"),
      text: event.get("text"),
    }

    // addDoc(collection(db, "notes"), {
    //   first: "Alan",
    //   last: "Turing",
    //   text: "TE AMO MESSI",
    // })
    //   .then()
    //   .catch();
    event.preventDefault();
  }

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const dbquery = query(collection(db, "notes"));
    getDocs(dbquery).then((querySnapshot: any) => {
      const notes = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notes as any);
    });
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Les deseamos lo mejor en su día&nbsp;
          <code className={styles.code}>Gonza y Belén</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}XPRODFE
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", minWidth: '240px' }}
        >
          <label>Mensaje</label>
          <textarea name="text" placeholder="Mensajito" />
          <label>Autor</label>
          <input type="text" name="author" placeholder="Nombre y Apellido" />
          <button>Submit</button>
        </form>
      </div>

      <div className={styles.grid}>
        {notes.map((note) => (
          <div className={styles["post-it"]} key={note.id}>
            <h1 className={styles["note-title"]}>Sticky note</h1>
            <ul>
              <li>
                {note?.text ?? ''}
              </li>
              <li>{note.author}</li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
