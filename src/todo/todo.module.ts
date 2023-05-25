import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  imports: [PrismaModule],
  providers: [TodoService],
})
export class TodoModule {}
