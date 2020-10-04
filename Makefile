.PHONY: test build

dbshell:
	docker-compose exec db psql -U typeorm -d typeorm
