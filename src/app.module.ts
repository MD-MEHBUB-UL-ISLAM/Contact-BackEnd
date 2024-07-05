import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [ContactModule, TypeOrmModule.forRoot(
     { type: 'postgres',
      host: 'containers-us-west-197.railway.app',
      port: 6591,
      username: 'postgres',
      password: 'iEYhht7fsHDgXGHTgUAJ',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
  
    }
  
    
  
    ), ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'), // added ../ to get one folder back
      serveRoot: '/public/' //last slash was important
    }),],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
