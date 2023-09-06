import { heroNameMaper } from "./heroNameMapper";

export const createHeroImageUrl = (heroID: number) => {
  const heroName = heroNameMaper(heroID);
  if (heroName != undefined) {
    const actualName = heroName.split("npc_dota_hero_").pop();
    const url = `https://cdn.dota2.com/apps/dota2/images/heroes/${actualName}_full.png`;
    return url;
  } else {
    return ""; // NO hero name found
  }
};
