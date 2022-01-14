# = = = = = = = = Install

depaby_cmi:
	make depaby_cmc
	cd depaby_ba & npm i
	cd gpi_ds & npm i
	cd gpi_fa & npm i
	cd depaby_fs & npm i
	cd gpi_gp & npm i

depaby_bmi:
	make depaby_bmc
	cd depaby_ba; npm i
	cd gpi_ds; npm i
	cd gpi_fa; npm i
	cd depaby_fs; npm i
	cd gpi_gp; npm i

# = = = = = = = = Copy

depaby_cmc:
	cd depaby_ba & copy .env.txt .env
	cd depaby_bm & copy .env.txt .env
	cd gpi_ds & copy .env.copy .env
	cd gpi_ds & copy .env.production.local.copy .env.production.local
	cd gpi_fa & copy .env.copy .env
	cd depaby_fs & copy .env.txt .env

depaby_bmc:
	cd depaby_ba; cp .env.txt .env
	cd depaby_bm; cp .env.txt .env
	cd gpi_ds; cp .env.copy .env
	cd gpi_ds; cp .env.production.local.copy .env.production.local
	cd gpi_fa; cp .env.copy .env
	cd depaby_fs; cp .env.txt .env

# = = = = = = = = backend api

depaby_cba:
	cd depaby_ba & npm run start

depaby_bba:
	cd depaby_ba; npm run start

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

# = = = = = = = = documentation swagger

gpi_wds:
	cd gpi_ds & npm run start

# = = = = = = = = frontend adminpanel

gpi_wfa:
	cd gpi_fa & npm run start

# = = = = = = = = frontend store

depaby_cfs:
	cd depaby_fs & npm run start

depaby_bfs:
	cd depaby_fs; npm run start

# = = = = = = = = github pages

gpi_wgp:
	cd gpi_ds & npm run build
	cd gpi_fa & npm run build
	cd gpi_fs & npm run build
	cd gpi_gp & npm run start
