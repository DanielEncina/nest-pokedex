import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios-adapter.adapter';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
