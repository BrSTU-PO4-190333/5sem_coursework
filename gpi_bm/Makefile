cleandb:
	rm -rfv var/lib/mysql/*

start:
	docker-compose up

restart:
	docker-compose down
	make cleandb
	make start
