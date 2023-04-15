import React from "react";
import PageTitle from "./Components/PageTitle";
import styles from "./styles/modules/App.module.scss";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import { Toaster } from "react-hot-toast";

// https://youtu.be/W0Uf_xu350k?t=9456

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={styles["app__wrapper"]}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bittom-right"
        toastOptions={{
          style: {
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;
