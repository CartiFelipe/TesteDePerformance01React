import { Link, Navigate, Outlet } from "react-router-dom";
import style from "./style.module.css";

export const Protected = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className={style.mainContainer}>
        <header className={style.header}>
          <h1>Barra de navegação</h1>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{token ? <Outlet /> : <Navigate to="/signin" />}</main>

        <footer> com algum mostrar que </footer>
      </div>
    </>
  );
};
