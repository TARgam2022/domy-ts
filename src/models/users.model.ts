export class user {
  name: string;
  role: string;
  cel: string;
  active: boolean;
  occupied: boolean;

  constructor(
    name: string,
    role: string,
    cel: string,
    active: boolean,
    occupied: boolean
  ) {
    this.name = name;
    this.role = role;
    this.cel = cel;
    this.active = active;
    this.occupied = occupied;
  }
}
