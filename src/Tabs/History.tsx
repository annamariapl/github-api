import React, { useState } from "react";
import Button from "../ReusableComponents/Button/Button";
import { ContainerWithHover } from "../ReusableComponents/Container/Container";

import { Title } from "../ReusableComponents/Title/Title";


const History: React.FC = () => {
  const localStorageArray = Object.entries(localStorage)
    .filter(el => el[0] !== "isLogedIn")
    .sort();

  const [mapLocalStorageInState, setMapLocalStorageInState] = useState(
    localStorageArray
  );
  const deleteHistoryItem = (item: string) => {
    localStorage.removeItem(item);
    let copy = mapLocalStorageInState.filter(el => item !== el[0]);
    setMapLocalStorageInState(copy);
  };

  return (
    <>
      <div className="searchContainer">
        <Title title="Your recent search" />
      </div>
      {mapLocalStorageInState.map((el, i) => {
        return (
          <ContainerWithHover>
            <small>
              <i> {` search no. ${i}`}</i>
            </small>
            <div>
            <Button kind="DELETE" onClick={() => deleteHistoryItem(el[0])}>delete</Button>
            </div>
            <div>{el[1]}</div>
          </ContainerWithHover>
        );
      })}
    </>
  );
};
export default History;
