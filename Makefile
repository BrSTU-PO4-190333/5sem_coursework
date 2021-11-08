gpi-install:
	make gpi-copy-env
	cd src/backend; npm i
	cd src/frontend; npm i
	cd src/frontend-webstore; npm i

gpi-copy-env:
	cd src/mysql; cp copy.env .env
	cd src/backend; cp copy.env .env
	cd src/frontend; cp copy.env .env
	cd src/frontend-webstore; cp copy.env .env

# = = = = = MySQL = = = = =

gpi-run-mysql:
	cd src/mysql; make start

gpi-restart-mysql:
	cd src/mysql; make restart

# = = = = = Backend = = = = =

gpi-run-backend:
	cd src/backend; npm run start

# = = = = = Frontend = = = = =

gpi-run-frontend:
	cd src/frontend; npm run start

gpi-run-frontend-webstore:
	cd src/frontend-webstore; npm run start
