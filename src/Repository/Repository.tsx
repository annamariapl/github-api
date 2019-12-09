import React from "react";
import { FaStar } from "react-icons/fa";
import { ContainerWithHover } from "../ReusableComponents/Container/Container";
import { Repo } from "../types";
import { Title } from "../ReusableComponents/Title/Title";
import "./repository.less"

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
              className="none"
            >
              <ContainerWithHover>
                <p>
                  <div className="description">{repo.description}</div>
                  <FaStar color="#f3dc47" /> {repo.stargazers_count}
                </p>
                <Title title={repo.name} />
              </ContainerWithHover>
            </a>
          );
        })}
    </>
  );
};
export default RepositoryComponent;
