import React from "react";
import { FaStar } from "react-icons/fa";
import { Container, Title } from "../ComponentsRegistery";
import { Repo } from "../types";

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
