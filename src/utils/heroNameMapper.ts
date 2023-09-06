import { heroNames } from "../constants/heroNames";

export const heroNameMaper = (heroID: number) => {
  const heroName = heroNames.find((item) => item.hero_id === heroID);
  return heroName?.hero_name;
};
