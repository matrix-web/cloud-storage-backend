import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.ru',
  })
  email: string;

  @ApiProperty({
    default: 'John Doe',
  })
  fullName: string;

  @ApiProperty({
    default: '12345',
  })
  password: string;
}
