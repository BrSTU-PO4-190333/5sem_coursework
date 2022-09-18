docker-compose-script:
	cd /app/gpi_dp

	latexmk -pdf -output-directory=/temp/ -jobname=KP.PO4.190333-04_81_00 main_coursework_1_pz.tex
	latexmk -pdf -output-directory=/temp/ -jobname=KP.PO4.190333-04_90_00__part1 main_coursework_3_0_a.tex
	latexmk -pdf -output-directory=/temp/ -jobname=KP.PO4.190333-04_90_00__part2 main_coursework_3_1_a.tex
	latexmk -pdf -output-directory=/temp/ -jobname=KP.PO4.190333-04_12_00 main_coursework_4_b.tex

	latexmk -pdf -output-directory=/temp/ -jobname=KP.PO4.190333-04_81_00.bundle main.tex

	cp /temp/*.pdf /build/
