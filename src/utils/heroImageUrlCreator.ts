import { heroNameMaper } from "./heroNameMapper";

export const createHeroImageUrl = (heroID: number) => {
  const heroName = heroNameMaper(heroID);
  if (heroName != undefined) {
    const actualName = heroName.split("npc_dota_hero_").pop();
    // const url = `http://localhost:3000/heroes/${actualName}`;
    return actualName ?? "";
  } else {
    return ""; // NO hero name found
  }
};
