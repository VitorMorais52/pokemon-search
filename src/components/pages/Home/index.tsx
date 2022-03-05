import { useState } from "react";

//services
import API from "../../../services/api";

//components
import TitledInput from "../../common/TitledInput";
import Box from "../../common/Box";

//stylesheets and icons
import { Container } from "./styles";
import iconArrowLeft from "../../../assets/arrowLeftIcon.svg";
import iconArrowRight from "../../../assets/arrowRightIcon.svg";

type SpritProps = {
  [key: string]: Record<string, Record<string, string>>;
};

type PokemonProps = {
  id: number;
  name: string;
  sprites: SpritProps;
};

function Home() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [namePokemon, setNamePokemon] = useState<string>("");
  const [infosPokemon, setInfosPokemon] = useState<PokemonProps>(
    {} as PokemonProps
  );

  const searchPokemon = async (searchId?: number) => {
    try {
      setIsFetching(true);
      if (!namePokemon && !infosPokemon.name) return;

      const searchKey = searchId ?? namePokemon.toLowerCase();
      const { id, name, sprites } = (await API.get(`${searchKey}`)).data;

      if (searchId) setNamePokemon(name);

      setInfosPokemon({ id, name, sprites });
    } catch (err: any) {
      if (err?.response && err.response.status === 404)
        setInfosPokemon({} as PokemonProps);
    } finally {
      setIsFetching(false);
    }
  };

  const handleNextPokemon = () => {
    const newId = infosPokemon.id + 1;
    searchPokemon(newId);
  };

  const handlePrevPokemon = () => {
    const newId = infosPokemon.id - 1;
    searchPokemon(newId);
  };

  return (
    <Container>
      <h1>Pokemon Search</h1>
      <TitledInput
        value={namePokemon}
        changeValue={setNamePokemon}
        handleClick={() => searchPokemon()}
      />
      <div className="nav">
        <button onClick={handlePrevPokemon} name="nextPokemon">
          <img src={iconArrowLeft} alt="icon previous pokemon" />
        </button>
        <button onClick={handleNextPokemon} name="previousPokemon">
          <img src={iconArrowRight} alt="icon next pokemon" />
        </button>
      </div>

      <Box pokemon={infosPokemon} />
    </Container>
  );
}

export default Home;
