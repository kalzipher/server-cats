import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BaseServiceModule } from '../base-service/base-service.module';
import { TheCatApiService } from './the-cat-api.service';

@Module({
    imports: [ConfigModule, BaseServiceModule],
    providers: [TheCatApiService],
    exports: [TheCatApiService]
})
export class TheCatApiModule {}
