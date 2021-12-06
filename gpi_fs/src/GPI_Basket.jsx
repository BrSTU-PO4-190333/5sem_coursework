export default function GPI_Basket() {
    const gpi_Basket = gpi_get_busket();

    function gpi_get_busket() {
        let gpi_str_busket;
        let gpi_busket;
        // = = = = = = = = = = = = = = = =

        gpi_str_busket = sessionStorage.getItem("gpi_basket");

        if (gpi_str_busket == null) {
            console.log(gpi_Basket);
            return {};
        }

        gpi_busket = JSON.parse(gpi_str_busket);

        if (Object.prototype.toString.call(gpi_busket) !== "[object Object]") {
            return {};
        }

        return gpi_busket;
    }

    function gpi_print() {
        alert("Заглушка печать");
    }

    return (
        <div className="container">
            <div className="mb-3 mt-3">
                <button
                    className="btn btn-success"
                    onClick={gpi_print}
                >Печать</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Модель</th>
                        <th>Количество</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(gpi_Basket).map(
                            (key, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{key}</td>
                                    <td>{gpi_Basket[key]}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
