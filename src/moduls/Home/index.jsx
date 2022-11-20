import Card from "../../components/Card/index";
import Pokemon from "../../helper/Pokemon";
import Button from "../../components/Button/index";
import Chosse from "../../components/Chosse";
import { useState } from "react";
const ModulsHome = () => {
  const [name, setName] = useState("Pikachu");
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );

  const changePokemon = (name, image) => {
    setName(name);
    setImage(image);
  };
  return (
    <>
      <Chosse text={name} image={image} />
      <div className="gap-y-10">
        <div className="grid grid-cols-4 gap-4">
          {Pokemon.map((el, i) => (
            <Card
              key={i}
              text={el.name}
              image={el.sprites.other.dream_world.front_default}
            >
              <Button
                onClick={() =>
                  changePokemon(
                    el.name,
                    el.sprites.other.dream_world.front_default
                  )
                }
                text="PILIH POKEMON"
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default ModulsHome;
