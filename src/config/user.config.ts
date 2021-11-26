import { Gender } from "../models/gender.model";

export const userConfig = {
  nick: {
    min: 5,
    max: 20
  },
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
    },
    position: {
      default: {
        mapId: "98raw12-t412a-4fy1-ayf4-c4c33gr266gb9f2a",
        x: 10,
        y: 15
      }
    }
  }
};
