export default function gpi_generate_param_url(gpi_site, gpi_DATA) {
    let gpi_url = gpi_site + "?";
    Object.keys(gpi_DATA).forEach(function(val) {
        gpi_url += `${val}=${gpi_DATA[val]}&`;
    })
    return gpi_url;
}
