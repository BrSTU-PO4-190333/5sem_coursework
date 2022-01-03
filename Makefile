gpi_wi:
	make gpi_wc
	cd gpi_ba & npm i
	cd gpi_ds & npm i
	cd gpi_fa & npm i
	cd gpi_fs & npm i

gpi_wc:
	cd gpi_ba & copy .env.copy .env
	cd gpi_bm & copy .env.copy .env
	cd gpi_ds & copy .env.copy .env
	cd gpi_ds & copy .env.production.local.copy .env.production.local
	cd gpi_fa & copy .env.copy .env
	cd gpi_fs & copy .env.copy .env

gpi_wba:
	cd gpi_ba & npm run start

gpi_wbm:
	cd gpi_bm & docker-compose up
	cd gpi_bm & docker-compose down

gpi_wdp:
	cd gpi_p & docker-compose up
	REM Для закрытия контейнера надо прописать:
	REM "cd gpi_p & docker-compose down"

gpi_wds:
	cd gpi_ds & npm run start

gpi_wfa:
	cd gpi_fa & npm run start

gpi_wfs:
	cd gpi_fs & npm run start

gpi_wgp:
	cd gpi_ds & npm run build
	cd gpi_fa & npm run build
	cd gpi_fs & npm run build
	cd gpi_gp & npm run start
