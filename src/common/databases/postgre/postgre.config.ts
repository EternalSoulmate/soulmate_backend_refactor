import { DataSource } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

type PostgresConfig = TypeOrmModuleOptions & {
  type: 'postgres';
};

// 공통 데이터베이스 설정
const dbConfig: PostgresConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../../**/*.entity{.ts,.js}`],
  // 개발 환경에서만 자동 동기화 사용
  synchronize: process.env.NODE_ENV === 'local',
};

export class PostgresConnection {
  private connection: DataSource;
  private readonly config: PostgresConfig;

  constructor() {
    this.config = { ...dbConfig };
  }

  async connect(): Promise<void> {
    this.connection = new DataSource(this.config);
    await this.connection.initialize();
  }

  async disconnect(): Promise<void> {
    await this.connection?.destroy();
  }

  getConnection(): DataSource {
    return this.connection;
  }

  getTypeOrmConfig(): PostgresConfig {
    return this.config;
  }
}

// TypeORM CLI를 위한 DataSource 인스턴스
const dataSource = new DataSource({
  ...dbConfig,
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  logging: true,
});

export default dataSource; 