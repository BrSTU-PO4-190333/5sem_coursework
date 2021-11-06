## Make PDF

Build a project:

```bash
cd texlive-full
#docker-compose up
docker-compose run latex /bin/bash
cd /home/user/content/rep/texlive-full
# make build-pz
# make build-a
# make build-b
make
```

Rebuild the project:

```bash
# docker-compose up
make
```

At the end of the work:

```bash
docker-compose down
```

## Cleaning the project

```bash
make clean
```
