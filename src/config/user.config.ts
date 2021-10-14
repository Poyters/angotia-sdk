import { Gender } from "../models/gender.model";

export const userConfig = {
  characters: {
    level: {
      min: 1,
      max: 99
    },
    quantity: {
      max: 4
    },
    sprite: {
      default: {
        [Gender.female]: "https://i.imgur.com/MLU2Uyf.png",
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
