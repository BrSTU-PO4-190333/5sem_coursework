function gpi_func_get_form_as_object(event) {
    let gpi_dict = {};

    const gpi_obj = event.target;

    // gpi_ Карта, содержащая число-двоеточие-число
    // gpi_ в той карте есть индекс не число - их нужно выкинуть
    const gpi_obj_keys = Object.keys(gpi_obj);

    gpi_obj_keys.forEach(gpi_val => {
        if (Number.isFinite(Number(gpi_val)) === false) {
            return;
        }

        // gpi_ Из тега <input name="gpi_model" /> берём поле name
        const gpi_key = gpi_obj[gpi_val].name;

        // gpi_ Из тега <input value="123" /> берём поле value
        const gpi_value = gpi_obj[gpi_val].value;

        // gpi_ Заносим в словарь ключ и значение
        gpi_dict[gpi_key] = gpi_value;
    });

    if ("" in gpi_dict) {
        delete gpi_dict[""] 
    }

    return gpi_dict;
}

export default gpi_func_get_form_as_object;
