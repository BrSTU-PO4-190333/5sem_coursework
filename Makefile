gpi_install:
	make gpi_copy-env
	cd gpi_backend-api; npm i
	cd gpi_frontend-adminpanel; npm i
	cd gpi_frontend-webstore; npm i

gpi_copy-env:
	cd gpi_lamp-mysql; cp copy.env .env
	cd gpi_backend-api; cp copy.env .env
	cd gpi_frontend-adminpanel; cp copy.env .env
	cd gpi_frontend-webstore; cp copy.env .env

# = = = = = MySQL = = = = =

gpi_run-lamp-mysql:
	cd gpi_lamp-mysql; make start

gpi_restart-lamp-mysql:
	cd gpi_lamp-mysql; make restart

# = = = = = Backend = = = = =

gpi_run-backend-api:
	cd gpi_backend-api; npm run start

# = = = = = Frontend = = = = =

gpi_run-frontend-adminpanel:
	cd gpi_frontend-adminpanel; npm run start

gpi_run-frontend-webstore:
	cd gpi_frontend-webstore; npm run start

# = = = = = PDF = = = = =

gpi_run-texlive-docker:
	cd gpi_texlive-full; docker-compose up
	cd gpi_texlive-full; docker-compose down

gpi_clean-texlive:
	cd gpi_texlive-full; make gpi_clean
