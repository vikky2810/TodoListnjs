import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>To-Do List App</title>
        <meta name="description" content="A simple To-Do List app using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>To-Do List</h1>

        <form onSubmit={handleAddTask} className={styles.form}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Add</button>
        </form>

        <div className={styles.taskList}>
          {tasks.length === 0 ? (
            <p>No tasks added yet!</p>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className={styles.taskItem}>
                <span>{task}</span>
                <button onClick={() => handleDeleteTask(index)} className={styles.deleteButton}>Delete</button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;