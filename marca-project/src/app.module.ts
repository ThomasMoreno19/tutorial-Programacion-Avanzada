import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarcaModule } from './modules/marca/marca.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'marca-project',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MarcaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}