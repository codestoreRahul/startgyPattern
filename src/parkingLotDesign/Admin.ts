import { Role } from "./Enums";
import { User, UserInterface } from "./User";

export interface AdminInterface extends UserInterface {
  approveRegistration(user: User): void;
  addUser(user: User): void;
  removeUser(userId: number): void;
  listUsers(): User[];
}

class Admin extends User implements AdminInterface {
  private users: User[];

  constructor(id: number, name: string) {
    super(id, name, Role.ADMIN);
    this.users = [];
  }

  approveRegistration(user: User): void {
    this.users.push(user);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(userId: number): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  listUsers(): User[] {
    return this.users;
  }
}
