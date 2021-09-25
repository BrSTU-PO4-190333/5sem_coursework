function GetUrlArgs(url) {
    let KeyAndValueArray = url.split("&");
    let UrlArgs = {};

    KeyAndValueArray.forEach(element => {
        let arr = element.split("=");
        let key = arr[0];
        let value = arr[1];
        UrlArgs[key] = value;
    });

    return UrlArgs;
}

module.exports = GetUrlArgs;
