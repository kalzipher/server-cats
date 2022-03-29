import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";

import { BaseService } from './based-service.service';

@Module({
    imports: [HttpModule],
    providers: [BaseService],
    exports: [BaseService]
})
export class BaseServiceModule {}
