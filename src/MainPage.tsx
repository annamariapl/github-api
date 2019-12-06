import { uniqueId } from "lodash";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import Button, { SearchContainer, Title } from "./ComponentsRegistery";
import InfiniteList from "./Repository/InfiniteList";
import History from "./SearchForm/History";
import SearchForm from "./SearchForm/SearchForm";
import { Repo } from "./types";
const axios = require("axios").default;

function MainPage() {
  const [query, setQuery] = useState<string>("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState<number>(0);
  console.log("page IN PAGE: ", page);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const resetSearch = () => {
    setRepos([]);
    setPage(0);
  };

  const handleSubmit = (event: any) => {
    resetSearch();
    event.preventDefault();
    localStorage.setItem(uniqueId("history"), query);
    getData(true);
  };

  const getData = (load: boolean) => {
    if (load) {
      try {
        axios
          .get(
            `https://api.github.com/search/repositories?q=${query}&page=${page}&sort=stars&order=desc&per_page=10`
          )
          .then((response: { data: { items: Repo[] } }) => {
            if (page === 0) {
              resetSearch();
              setRepos(response.data.items);
            } else {
              resetSearch();
              setRepos([...repos, ...response.data.items]);
            }
            setPage(page + 1);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mainContanier">
      <Tabs>
        <TabList>
          <Tab>
            <Title title="Search" />
          </Tab>
          <Tab>
            <Title title="History" />
          </Tab>
        </TabList>

        <TabPanel>
          <SearchContainer>
            <SearchForm
              handleChange={handleChange}
              query={query}
              handleSubmit={handleSubmit}
            />

            <Button kind={"DELETE"} onClick={resetSearch}>
              reset
            </Button>
          </SearchContainer>
          <InfiniteList repos={repos} getData={getData} query={query} />
        </TabPanel>
        <TabPanel>
          <History />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MainPage;
