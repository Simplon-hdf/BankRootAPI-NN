export class CreateUserDto {
  name: string;
  lastname: string;
  mail: string;
  password: string;
  uuid: string;
  created_at: Date;
  update_at: Date;
  isadmin: boolean;
  isclient: boolean;
}
