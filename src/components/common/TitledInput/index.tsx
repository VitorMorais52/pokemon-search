import { useState } from "react";

//stylesheets and icons
import { Container, Button } from "./styles";
import iconSearch from "../../../assets/searchIcon.svg";

type TitledInputProps = {
  title?: string;
  value: string;
  changeValue: (v: string) => void;
  handleClick: () => void;
};

function TitledInput({
  title,
  value,
  changeValue,
  handleClick,
}: TitledInputProps) {
  return (
    <Container>
      <label>
        <h3>{title}</h3>
        <div className="input-content">
          <input
            type="text"
            placeholder="Search pokemon name or ID"
            value={value}
            onChange={({ target }) => changeValue(target.value)}
          />
          <Button data-testid="btnSearch" onClick={handleClick}>
            <img src={iconSearch} alt="search icon" width="26px" />
          </Button>
        </div>
      </label>
    </Container>
  );
}

export default TitledInput;
