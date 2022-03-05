import { Container, NotFound } from "./styles";

type SpritProps = {
  [key: string]: Record<string, Record<string, string>>;
};

type PokemonProps = {
  id: number;
  name: string;
  sprites: SpritProps;
};

type BoxProps = {
  pokemon: PokemonProps;
};

function Box({ pokemon }: BoxProps) {
  const mainImage = pokemon.sprites?.other.dream_world.front_default;
  const secondaryImage = pokemon.sprites?.other.home.front_default;

  return (
    <Container>
      {pokemon.id ? (
        <div className="content">
          <div className="infos">
            <div className="value">
              <span>#{pokemon.id}</span>
              <span>{pokemon.name}</span>
            </div>
          </div>
          <div className="image">
            <img src={mainImage || secondaryImage} alt="pokemon image" />
          </div>
        </div>
      ) : (
        <NotFound>
          <h2>No pokemon found</h2>
          <p>
            Make sure you search for a valid name or an ID between 1 and 898
          </p>
        </NotFound>
      )}
    </Container>
  );
}

export default Box;
