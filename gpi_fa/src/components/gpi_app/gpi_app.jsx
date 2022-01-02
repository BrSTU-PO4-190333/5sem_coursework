import { Switch, Route } from "react-router";
import GpiMenu from "./../gpi_menu/gpi_menu";
import GpiSingIn from "./../gpi_sing_in/gpi_sing_in";
import GpiLogout from "./../gpi_logout/gpi_logout";
import Gpi404 from "./../gpi_404/gpi_404";
import GpiLoadProducts from "./../gpi_load_products/gpi_load_products";
import GpiAddProduct from "./../gpi_add_product/gpi_add_product";
import GpiGetProducts from "./../gpi_get_products/gpi_get_products";
import GpiDownloadCSVproducts from "./../gpi_download_csv_products/gpi_download_csv_products";
import GpiDownloadJSONproducts from "./../gpi_download_json_products/gpi_download_json_products";
import GpiEditProduct from "./../gpi_edit_product/gpi_edit_products";
import "./gpi_app.css";
import styles from "./gpi_app.module.css";

function GpiApp() {
    return (
        <div className={styles.App}>
            <GpiMenu />
            <div className={styles.App__content}>
                <Switch>
                    <Route exact path="/" component={GpiSingIn} />
                    <Route path="/logout" component={GpiLogout} />
                    <Route exact path="/products" component={GpiGetProducts} />
                    <Route path="/products/open" component={GpiLoadProducts} />
                    <Route path="/products/add" component={GpiAddProduct} />
                    <Route path="/products/get" component={GpiGetProducts} />
                    <Route path="/products/download-csv" component={GpiDownloadCSVproducts} />
                    <Route path="/products/download-json" component={GpiDownloadJSONproducts} />
                    <Route path="/products/edit/:editID" component={GpiEditProduct} />
                    <Route component={Gpi404} />
                </Switch>
            </div>
        </div>
    );
}

export default GpiApp;
