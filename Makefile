install:
	npm ci
lint:
	npx eslint .
test:
	npm test
publish:
	npm publish --dry-run
test-coverage:
	npm test -- --coverage --coverageProvider=v8