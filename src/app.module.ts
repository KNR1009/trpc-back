import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [TodoModule, PrismaModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
