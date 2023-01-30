export class CreateUserDto {
  name: string;
  lastname: string;
  mail: string;
  password: string;
  uuid: string;
  created_at: Date;
  updated_at: Date;
  isadmin: boolean;
  isclient: boolean;
}
