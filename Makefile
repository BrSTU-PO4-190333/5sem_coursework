gpi_wi:
	make gpi_wc
	cd gpi_b & npm i
	cd gpi_ds & npm i
	cd gpi_fa & npm i
	cd gpi_fs & npm i
	cd gpi_s & npm i

gpi_wc:
	cd gpi_m & copy copy.env .env
	cd gpi_b & copy copy.env .env
	cd gpi_fa & copy copy.env .env
	cd gpi_fs & copy copy.env .env

gpi_wb:
	cd gpi_b & npm run start

gpi_wds:
	cd gpi_ds & npm run start

gpi_wfa:
	cd gpi_fa & npm run start

gpi_wfs:
	cd gpi_fs & npm run start

gpi_wm:
	cd gpi_m & docker-compose up
	cd gpi_m & docker-compose down

gpi_wp:
	cd gpi_p & docker-compose up
	REM Для закрытия контейнера надо прописать:
	REM "cd gpi_p & docker-compose down"

gpi_ws:
	cd gpi_s & npm run start
