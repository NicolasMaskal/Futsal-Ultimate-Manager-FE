import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <article className="p-10">
      <h1 className="text-2xl mb-8">Welcome to Futsal Ultimate Manager.</h1>
      <p>
        You can create your own team, open packs to strengthen your team,
        simulate matches against an ai opponent and much more !
      </p>
      <p>
        Feel free to sign up, if you don't have an account yet.{" "}
        <Link className="text-sky-500 hover:text-sky-700" to="/register">
          Sign up
        </Link>
      </p>
    </article>
  );
};

export default WelcomePage;
