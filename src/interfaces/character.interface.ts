import { Gender } from "../models/gender.model";

export interface NewCharacter {
  nick: string;
  gender: Gender;
  sprite?: string;
}
