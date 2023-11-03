import { Role } from "./Enums";

export interface UserInterface {
  id: number;
  name: string;
  role: Role;
}

export class User implements UserInterface {
  private _id: number;
  private _name: string;
  private _role: Role;

  constructor(id: number, name: string, role: Role) {
    this._id = id;
    this._name = name;
    this._role = role;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get role(): Role {
    return this._role;
  }

  set role(role: Role) {
    this._role = role;
  }
}
