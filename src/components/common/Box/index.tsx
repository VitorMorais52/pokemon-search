//stylesheets
import { Container, NotFound, Loading } from "./styles";

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
  isLoading: boolean;
};

function Box({ pokemon, isLoading }: BoxProps) {
  const mainImage = pokemon.sprites?.other.dream_world.front_default;
  const secondaryImage = pokemon.sprites?.other.home.front_default;

  return (
    <Container>
      {!isLoading && pokemon.id && (
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
      )}
      {!isLoading && !pokemon.id && (
        <NotFound>
          <h2>No pokemon found</h2>
          <p>
            Make sure you search for a valid name or an ID between 1 and 898
          </p>
        </NotFound>
      )}
      {/* needs configuration to not generate an error when running the tests (jest does not recognize) */}
      {/* {isLoading && (
        <Loading>
          <Skeleton
            width="400px"
            height="370px"
            baseColor={"rgba(0,0,0,0.2)"}
            highlightColor={"rgba(0, 0, 0, 0.4)"}
          />
        </Loading>
      )} */}
    </Container>
  );
}

export default Box;
