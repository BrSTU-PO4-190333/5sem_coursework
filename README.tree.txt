.
|-- .gitignore
|-- LICENSE
|-- Makefile
|-- README.md
|-- README.tree.txt
|-- depaby_ba
|   |-- .env.txt
|   |-- .gitignore
|   |-- package.json
|   `-- src
|       |-- index.js
|       |-- routes
|       |   |-- auth
|       |   |   `-- auth.js
|       |   |-- contacts
|       |   |   |-- contacts.js
|       |   |   |-- contacts_create.js
|       |   |   |-- contacts_delete.js
|       |   |   |-- contacts_read.js
|       |   |   `-- contacts_update.js
|       |   |-- documents
|       |   |   |-- documents.js
|       |   |   |-- documents_create.js
|       |   |   |-- documents_delete.js
|       |   |   |-- documents_read.js
|       |   |   `-- documents_update.js
|       |   |-- email
|       |   |   `-- email.js
|       |   |-- productCategories
|       |   |   |-- productCategories.js
|       |   |   |-- productCategories_create.js
|       |   |   |-- productCategories_delete.js
|       |   |   |-- productCategories_read.js
|       |   |   `-- productCategories_update.js
|       |   `-- products
|       |       |-- products.js
|       |       |-- products_create.js
|       |       |-- products_delete.js
|       |       |-- products_read.js
|       |       `-- products_update.js
|       `-- scripts
|           |-- AbstractObject
|           |   |-- AbstractObject.js
|           |   |-- ObjectContact.js
|           |   |-- ObjectDocument.js
|           |   |-- ObjectProduct.js
|           |   `-- ObjectProductCategories.js
|           `-- AbstractQueryCrud
|               |-- AbstractQueryCrud.js
|               |-- QueryCrudContacts.js
|               |-- QueryCrudDocuments.js
|               |-- QueryCrudProducts.js
|               `-- QueryCrudProductsCategories.js
|-- depaby_bm
|   |-- .env.txt
|   |-- .gitignore
|   |-- docker-compose.yml
|   `-- initdb.d
|       |-- depaby_admins.sql
|       |-- depaby_contacts.sql
|       |-- depaby_documents.sql
|       |-- depaby_product_categories.sql
|       `-- depaby_products.sql
|-- depaby_fa
|   |-- .browserslistrc
|   |-- .env.production.txt
|   |-- .env.txt
|   |-- .eslintrc.js
|   |-- .gitignore
|   |-- package.json
|   |-- public
|   |   |-- .htaccess
|   |   |-- favicon.ico
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   `-- robots.txt
|   `-- src
|       |-- App.css
|       |-- App.jsx
|       |-- components
|       |   |-- BreadCrumbs
|       |   |   |-- BreadCrumbs.jsx
|       |   |   `-- BreadCrumbs.module.css
|       |   |-- ContactForm
|       |   |   `-- ContactForm.jsx
|       |   |-- DeleteButton
|       |   |   `-- DeleteButton.jsx
|       |   |-- DeleteTableButton
|       |   |   `-- DeleteTableButton.jsx
|       |   |-- DocumentForm
|       |   |   `-- DocumentForm.jsx
|       |   |-- FormButton
|       |   |   `-- FormButton.jsx
|       |   |-- HomeButton
|       |   |   `-- HomeButton.jsx
|       |   |-- LoadTableButton
|       |   |   `-- LoadTableButton.jsx
|       |   |-- ProductCategoriesForm
|       |   |   `-- ProductCategoriesForm.jsx
|       |   |-- ProductForm
|       |   |   `-- ProductForm.jsx
|       |   |-- SaveAsCsvButton
|       |   |   `-- SaveAsCsvButton.jsx
|       |   |-- SaveAsJsonButton
|       |   |   `-- SaveAsJsonButton.jsx
|       |   |-- UploadJsonButton
|       |   |   `-- UploadJsonButton.jsx
|       |   `-- WindowForm
|       |       |-- WindowForm.jsx
|       |       `-- WindowForm.module.css
|       |-- index.js
|       |-- routes
|       |   |-- 404
|       |   |   `-- 404.jsx
|       |   |-- contacts
|       |   |   |-- contacts.jsx
|       |   |   `-- contacts.module.css
|       |   |-- documents
|       |   |   |-- documents.jsx
|       |   |   `-- documents.module.css
|       |   |-- home
|       |   |   |-- home.jsx
|       |   |   `-- home.module.css
|       |   |-- login
|       |   |   |-- login.jsx
|       |   |   `-- login.module.css
|       |   |-- logout
|       |   |   `-- logout.jsx
|       |   |-- productCategories
|       |   |   |-- productCategories.jsx
|       |   |   `-- productCategories.module.css
|       |   |-- products
|       |   |   |-- products.jsx
|       |   |   `-- products.module.css
|       |   `-- products-category
|       |       `-- product-category.jsx
|       `-- scripts
|           |-- AbstractFetchCrud
|           |   |-- AbstractFetchCrud.js
|           |   |-- FetchCrudContacts.js
|           |   |-- FetchCrudDocuments.js
|           |   |-- FetchCrudProductCategories.js
|           |   `-- FetchCrudProducts.js
|           |-- FetchAuth.js
|           |-- download_file.js
|           `-- get_form_data.js
|-- depaby_fs
|   |-- .browserslistrc
|   |-- .env.production.txt
|   |-- .env.txt
|   |-- .eslintrc.js
|   |-- .gitignore
|   |-- package.json
|   |-- public
|   |   |-- .htaccess
|   |   |-- favicon.ico
|   |   |-- favicon.svg
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   |-- robots.txt
|   |   `-- sitemap.xml
|   `-- src
|       |-- App.css
|       |-- App.jsx
|       |-- components
|       |   |-- BreadCrumbs
|       |   |   |-- BreadCrumbs.jsx
|       |   |   `-- BreadCrumbs.module.css
|       |   |-- Carousel
|       |   |   |-- Carousel.jsx
|       |   |   `-- Carousel.module.css
|       |   |-- DocumentCard
|       |   |   |-- DocumentCard.jsx
|       |   |   `-- DocumentCard.module.css
|       |   |-- Footer
|       |   |   |-- Footer.jsx
|       |   |   `-- Footer.module.css
|       |   |-- Map
|       |   |   |-- Map.jsx
|       |   |   `-- Map.module.css
|       |   |-- Nav
|       |   |   |-- Nav.jsx
|       |   |   |-- Nav.module.css
|       |   |   `-- logo.png
|       |   `-- pages
|       |       |-- 404
|       |       |   `-- 404.jsx
|       |       |-- about
|       |       |   `-- about.jsx
|       |       |-- basket
|       |       |   |-- basket.jsx
|       |       |   `-- basket.module.css
|       |       |-- catalogs
|       |       |   `-- catalogs.jsx
|       |       |-- certificates
|       |       |   `-- certificates.jsx
|       |       |-- contacts
|       |       |   |-- contacts.jsx
|       |       |   `-- contacts.module.css
|       |       |-- home
|       |       |   |-- SHOWROOM.jpg
|       |       |   |-- home.jsx
|       |       |   |-- slide1.jpg
|       |       |   |-- slide2.jpg
|       |       |   `-- slide3.jpg
|       |       |-- prices
|       |       |   `-- prices.jsx
|       |       |-- products
|       |       |   |-- products.jsx
|       |       |   `-- products.module.css
|       |       |-- products-category
|       |       |   |-- products-category.jsx
|       |       |   `-- products-category.module.css
|       |       |-- products-category-model
|       |       |   |-- products-category-model.jsx
|       |       |   `-- products-category-model.module.css
|       |       `-- sitemap
|       |           `-- sitemap.jsx
|       |-- index.js
|       |-- pages.js
|       `-- scripts
|           |-- AbstractFetchRead
|           |   |-- AbstractFetchRead.js
|           |   |-- FetchReadContacts.js
|           |   |-- FetchReadDocuments.js
|           |   |-- FetchReadProductCategories.js
|           |   `-- FetchReadProducts.js
|           |-- FetchEmail.js
|           |-- ProductBasket.js
|           |-- download_file.js
|           `-- get_form_data.js
|-- depaby_gh_pages
|   |-- .gitignore
|   `-- package.json
|-- depaby_postman
|   |-- README.md
|   |-- depaby_admins.postman_collection.json
|   |-- depaby_contacts.postman_collection.json
|   |-- depaby_documents.postman_collection.json
|   |-- depaby_product_categories.postman_collection.json
|   |-- depaby_products.postman_collection.json
|   `-- examples
|       |-- depaby_documents.json
|       |-- depaby_productCategories.json
|       `-- depaby_products.json
|-- docker-compose.tex.yml
`-- gpi_dp
    |-- .gitignore
    |-- Makefile
    |-- _assets
    |   |-- gpi_a_contacts.drawio
    |   |-- gpi_a_contacts.png
    |   |-- gpi_a_pdf.drawio
    |   |-- gpi_a_pdf.png
    |   |-- gpi_a_product.drawio
    |   |-- gpi_a_product.png
    |   |-- gpi_a_programPlan.drawio
    |   |-- gpi_a_programPlan.png
    |   |-- gpi_backend_modules.drawio
    |   |-- gpi_backend_modules.png
    |   |-- gpi_client_server.drawio
    |   |-- gpi_client_server.png
    |   |-- gpi_description_of_updated_use_case_employee.drawio
    |   |-- gpi_description_of_updated_use_case_employee.png
    |   |-- gpi_description_of_updated_use_case_user.drawio
    |   |-- gpi_description_of_updated_use_case_user.png
    |   |-- gpi_description_of_use_case_employee.drawio
    |   |-- gpi_description_of_use_case_employee.png
    |   |-- gpi_description_of_use_case_user.drawio
    |   |-- gpi_description_of_use_case_user.png
    |   |-- gpi_frontend_modules.drawio
    |   |-- gpi_frontend_modules.png
    |   |-- gpi_pz_add_product.png
    |   |-- gpi_pz_android_menu.png
    |   |-- gpi_pz_auth_error_login.png
    |   |-- gpi_pz_auth_error_password.png
    |   |-- gpi_pz_backet.png
    |   |-- gpi_pz_choco_1.png
    |   |-- gpi_pz_choco_2.png
    |   |-- gpi_pz_choco_3.png
    |   |-- gpi_pz_choco_4.png
    |   |-- gpi_pz_choco_5.png
    |   |-- gpi_pz_choco_6.png
    |   |-- gpi_pz_delete_product.png
    |   |-- gpi_pz_docker_01.png
    |   |-- gpi_pz_docker_02.png
    |   |-- gpi_pz_docker_03.png
    |   |-- gpi_pz_docker_04.png
    |   |-- gpi_pz_docker_05.png
    |   |-- gpi_pz_docker_06.png
    |   |-- gpi_pz_docker_07.png
    |   |-- gpi_pz_docker_08.png
    |   |-- gpi_pz_docker_09.png
    |   |-- gpi_pz_docker_10.png
    |   |-- gpi_pz_docker_11.png
    |   |-- gpi_pz_docker_12.png
    |   |-- gpi_pz_docker_13.png
    |   |-- gpi_pz_docker_14.png
    |   |-- gpi_pz_docker_15.png
    |   |-- gpi_pz_docker_16.png
    |   |-- gpi_pz_docker_17.png
    |   |-- gpi_pz_docker_18.png
    |   |-- gpi_pz_docker_19.png
    |   |-- gpi_pz_docker_20.png
    |   |-- gpi_pz_docker_21.png
    |   |-- gpi_pz_docker_22.png
    |   |-- gpi_pz_empty_table.png
    |   |-- gpi_pz_error_open_file.png
    |   |-- gpi_pz_mysql_admins.png
    |   |-- gpi_pz_mysql_products.png
    |   |-- gpi_pz_not_empty_table.png
    |   |-- gpi_pz_open_products_json.png
    |   |-- gpi_pz_user_about_product.png
    |   |-- gpi_pz_user_products.png
    |   |-- gpi_ui_get.drawio
    |   |-- gpi_ui_get.png
    |   |-- gpi_ui_menu.drawio
    |   `-- gpi_ui_menu.png
    |-- _sty
    |   |-- gpi_lst.sty
    |   |-- gpi_p.sty
    |   |-- gpi_t.sty
    |   |-- gpi_toc.sty
    |   `-- gpi_u.sty
    |-- _tex
    |   |-- gpi_a_titlePage.tex
    |   |-- gpi_b_titlePage.tex
    |   |-- gpi_pz_1_systemAnalysisAndProblemStatement.tex
    |   |-- gpi_pz_2_systemDesign.tex
    |   |-- gpi_pz_3_implementationOfTheSystem.tex
    |   |-- gpi_pz_4_systemTesting.tex
    |   |-- gpi_pz_conclusion.tex
    |   |-- gpi_pz_intro.tex
    |   |-- gpi_pz_literature.tex
    |   |-- gpi_pz_tableOfContent.tex
    |   `-- gpi_pz_titlePage.tex
    |-- env.sty
    |-- main.tex
    |-- main_coursework_1_pz.tex
    |-- main_coursework_3_0_a.tex
    |-- main_coursework_3_1_a.tex
    |-- main_coursework_4_b.tex
    `-- tz.docx

76 directories, 271 files
