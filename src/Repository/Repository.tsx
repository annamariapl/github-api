import React from "react";
import { FaStar } from "react-icons/fa";
import { Container } from "../ReusableComponents/Container/Container";
import { Repo } from "../types";
import { Title } from "../ReusableComponents/Title/Title";

type Props = {
  repos: Repo[];
};

const RepositoryComponent: React.FC<Props> = ({ repos }) => {
  return (
    <>
      {repos &&
        repos.map((repo, i) => {
          return (
            <a
              key={i}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Container>
                <p>
                  <FaStar color="#f3dc47" /> {repo.stargazers_count}
                </p>
                <Title title={repo.name} />
              </Container>
            </a>
          );
        })}
    </>
  );
};
export default RepositoryComponent;
