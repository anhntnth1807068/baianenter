function searchTube(a) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + a + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsOject = JSON.parse(xhttp.responseText);
            var Tubes = '';
            for (var i = 0; i < jsOject.items.length; i++) {
                var listTube ='<div>'+
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + jsOject.items[i].id.videoId +'"' +
                    'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
                    '</div>';
                Tubes += listTube;
            }
            document.getElementById('demo').innerHTML = Tubes;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
document.getElementById('btn').onclick = function () {
    var mykeyword=document.getElementById('keyword').value;
    searchTube(mykeyword);
};
document.getElementById('keyword').onkeypress=function(e){
    if (e.keyCode===13){
        var mykeyword=document.getElementById('keyword').value;
        searchTube(mykeyword);
    }
};
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();