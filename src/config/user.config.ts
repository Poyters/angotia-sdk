import { Gender } from "../models/gender.model";

export const userConfig = {
  characters: {
    maxLevel: 99,
    max: 4,
    sprite: {
      default: {
        [Gender.female]: "https://i.imgur.com/dypMVUP.png",
        [Gender.male]: "https://i.imgur.com/dypMVUP.png"
      },
      size: {
        x: 144,
        y: 288
      },
      frames: 3,
      movementDirectionAnimations: 4
    }
  }
};
