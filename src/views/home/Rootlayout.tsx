// all imports
import React from "react";
import { Outlet, NavLink, Navigate } from "react-router-dom";
import style from "./style.module.scss";

const Rootlayout = () => {
  return (
    <div className={style.mainContainer}>
      <header className={style.header}>
        <h1>Barra de navegação</h1>

        <nav>
          <ul className={style.navUl}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className={style.content}>
        <Outlet />
      </main>

      <footer className={style.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
export default Rootlayout;
