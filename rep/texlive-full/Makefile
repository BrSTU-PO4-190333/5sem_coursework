build:
	make build-pz
	make build-a
	make build-b
	cp _build/*.pdf ../

build-a:
	latexmk -pdf -output-directory=_build gpi_coursework4_a.tex

build-b:
	latexmk -pdf -output-directory=_build gpi_coursework4_b.tex

build-pz:
	latexmk -pdf -output-directory=_build gpi_coursework4_pz.tex

clean:
	rm -rfv ./*/*.aux
	rm -rfv ./*/*.fdb_latexmk
	rm -rfv ./*/*.fls
	rm -rfv ./*/*.log
	rm -rfv ./*/*.out
	rm -rfv ./*/*.pdf
	rm -rfv ./*/*.synctex.gz
	rm -rfv ./*/*.toc
