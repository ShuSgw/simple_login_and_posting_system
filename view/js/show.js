const showingSql = () => {
    var fd = new FormData();
    fd.append("table", "showPosts");
    fetch("../server/show.php", {
        method: 'post',
        credentials: 'same-origin',
        body: fd
    })
        .then(resp => resp.text())
        .then(text => {
            document.getElementById("displayPosts").innerHTML = text;
        })
}
showingSql();
