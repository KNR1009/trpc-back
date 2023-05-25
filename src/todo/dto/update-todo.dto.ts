// src/todo/dto/update-todo.dto.ts

import { IsString, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  body?: string;
}
