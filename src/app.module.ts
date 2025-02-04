import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { LoggerMiddleware } from './middleware';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    PostsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true}),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        'type': 'postgres',
        'host': configService.get('DB_HOST'),
        'port': configService.get('DB_PORT'),
        'username': configService.get('DB_USERNAME'),
        'password': configService.get('DB_PASSWORD'),
        'database': configService.get('DB_NAME'),
        'entities': [],
        'synchronize': configService.get('DB_SYNCHRONIZE'),
        'logging': true,
      })
    })
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
