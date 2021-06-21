import { atom } from "recoil";

export const menuVisibility = atom({
  key: "menuVisibility",
  default: false,
});
export const mobilemenuVisibility = atom({
  key: "mobilemenuVisibility",
  default: false,
});
export const isLoged = atom({
  key: "isLoged",
  default: false,
});
export const storyBar = atom({
  key: "storyBar",
  default: false,
});
export const imagePopup = atom({
  key: "imagePopup",
  default: { vis: false },
});
