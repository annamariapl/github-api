import React, { useState, useEffect } from "react";

import { Repo } from "../types";
import RepositoryComponent from "../Repository/Repository";

type Props = {
  repos: Repo[];
  query: string;
  getData: (load: boolean) => void;
};

const InfiniteList: React.FC<Props> = ({ repos, query, getData }) => {
  console.log("repos: ", repos);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    const list = document.getElementById("list");
    window.addEventListener("scroll", () => {
      if (
        list &&
        window.scrollY + window.innerHeight ===
          list.clientHeight + list.offsetTop
      ) {
        setLoadMore(true);
      }
    });
  }, []);

  useEffect(() => {
    const list = document.getElementById("list");
    if (list && list.clientHeight <= window.innerHeight && list.clientHeight) {
      setLoadMore(true);
    }
  }, [repos]);

  useEffect(() => {
    getData(loadMore);
    setLoadMore(false);
  }, [loadMore, query, getData]);

  return (
    <div id="list">
      <RepositoryComponent repos={repos} />
    </div>
  );
};

export default InfiniteList;