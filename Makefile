# = = = = = = = = Install

depaby_cmi:
	make depaby_cmc
	cd depaby_ba & npm i
	cd depaby_fa & npm i
	cd depaby_fs & npm i

depaby_bmi:
	make depaby_bmc
	cd depaby_ba; npm i
	cd depaby_fa; npm i
	cd depaby_fs; npm i

# = = = = = = = = Copy

depaby_cmc:
	cd depaby_ba & copy .env.txt .env
	cd depaby_bm & copy .env.txt .env
	cd depaby_fa & copy .env.txt .env
	cd depaby_fs & copy .env.txt .env
	cd depaby_fa & copy .env.production.txt .env.production
	cd depaby_fs & copy .env.production.txt .env.production

depaby_bmc:
	cd depaby_ba; cp .env.txt .env
	cd depaby_bm; cp .env.txt .env
	cd depaby_fa; cp .env.txt .env
	cd depaby_fs; cp .env.txt .env
	cd depaby_fa; cp .env.production.txt .env.production
	cd depaby_fs; cp .env.production.txt .env.production

# = = = = = = = = backend api

depaby_cba:
	cd depaby_ba & npm run dev

depaby_bba:
	cd depaby_ba; npm run dev

# = = = = = = = = backend mysql

depaby_cbm:
	cd depaby_bm & docker-compose down
	cd depaby_bm & docker-compose up
	cd depaby_bm & docker-compose down

depaby_bbm:
	cd depaby_bm; docker-compose down
	cd depaby_bm; docker-compose up
	cd depaby_bm; docker-compose down

# = = = = = = = = documentation latex

gpi_wdp:
	cd gpi_p & docker-compose up
	REM Для закрытия контейнера надо прописать:
	REM "cd gpi_p & docker-compose down"

# = = = = = = = = frontend adminpanel

depaby_cfa:
	cd depaby_fa & npm run start

depaby_bfa:
	cd depaby_fa; npm run start

# = = = = = = = = frontend store

depaby_cfs:
	cd depaby_fs & npm run start

depaby_bfs:
	cd depaby_fs; npm run start

# = = = = = = = = build

depaby_cgh:
	cd depaby_fa & npm run build
	cd depaby_fs & npm run build
	cd depaby_gh_pages & npm run deploy

depaby_bgh:
	cd depaby_fa; npm run build
	cd depaby_fs; npm run build
	cd depaby_gh_pages;npm run deploy
