import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => {
            const uri = `mongodb+srv://${configService.get("DB_USER")}:${configService.get("DB_PASS")}@${configService.get("DB_CLOUSTER")}.mongodb.net/${configService.get("DB_NAME")}`
            return {
                uri: uri,
            }
        },
        inject: [ConfigService],
    })],
})
export class MongoModule {}
