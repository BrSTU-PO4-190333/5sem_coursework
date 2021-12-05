gpi_build-pdf:
	make gpi_build-pz
	make gpi_build-a
	make gpi_build-b

gpi_build-pz:
	latexmk -pdf -output-directory=_build gpi_coursework4_pz.tex

gpi_build-a:
	latexmk -pdf -output-directory=_build gpi_coursework4_a.tex
	latexmk -pdf -output-directory=_build gpi_coursework4_a_programPlan.tex

gpi_build-b:
	latexmk -pdf -output-directory=_build gpi_coursework4_b.tex

gpi_clean:
	rm -rfv ./*/*.aux
	rm -rfv ./*/*.fdb_latexmk
	rm -rfv ./*/*.fls
	rm -rfv ./*/*.log
	rm -rfv ./*/*.out
	rm -rfv ./*/*.pdf
	rm -rfv ./*/*.synctex.gz
	rm -rfv ./*/*.toc
