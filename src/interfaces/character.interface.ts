import { Gender } from "../models/gender.model";

export interface NewCharacter {
  nick: string;
  gender: Gender;
  sprite?: string;
}
export interface Character {
  id: string;
  created: number;
  timeSpent: number;
  gender: Gender;
  nick: string;
  sprite: string;
  level: number;
}
