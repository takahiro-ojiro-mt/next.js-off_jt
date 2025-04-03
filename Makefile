# 開発用 Docker
dev-up:
	cd docker && docker compose -f docker-compose.dev.yml up --build

dev-down:
	cd docker && docker compose -f docker-compose.dev.yml down

# 本番用 Docker
prod-up:
	cd docker && docker compose -f docker-compose.prod.yml up --build

prod-down:
	cd docker && docker compose -f docker-compose.prod.yml down

# Docker イメージビルドだけ（タグ付き）
build-dev:
	docker build -f docker/Dockerfile.dev -t next-tutorial:dev .

build-prod:
	docker build -f docker/Dockerfile.prod -t next-tutorial:prod .

# 開発環境の立ち上げ
dev:
	pnpm dev

# チェックと整形
lint:
	pnpm lint
	pnpm format

format-check:
	pnpm format:check

test:
	pnpm test

test-watch:
	pnpm test:watch

test-coverage:
	pnpm test:coverage

test-view-ui:
	pnpm test:ui