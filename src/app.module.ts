import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { connectionOptions } from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TagsModule,
    UserModule,
    TypeOrmModule.forRoot(connectionOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
