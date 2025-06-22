# 소울메이트 백엔드

## 개요
NestJS 기반의 소울메이트 백엔드 API 서버입니다.

## 기술 스택
- **Framework**: NestJS
- **Database**: PostgreSQL
- **Cache**: Redis
- **Storage**: AWS S3
- **Container**: Docker

## 시작하기

### 1. 로컬 개발 실행
```bash
npm run docker:local
```

### 2. API 문서 확인
http://localhost:3000/api-docs

## 주요 명령어
```bash
# 개발 서버 시작
npm run docker:local

# 서비스 중지
docker compose down

# 코드 포맷팅
npm run format

# 테스트
npm run test
```
```