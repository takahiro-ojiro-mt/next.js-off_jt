# 開発用 Docker
dev-up:
	cd docker && docker compose -f docker-compose.yml up --build

dev-down:
	cd docker && docker compose -f docker-compose.yml down

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