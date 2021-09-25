function DownloadFile(text = "[{}]", filename = "data.json") {
    if (filename === "") filename = "data.json";
    let blob = new Blob([text], { type: 'text/plain' });
    let link = document.createElement("a");
    link.download = filename;
    //link.innerHTML = "Download File";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
    }, 100);
}

export default DownloadFile;
