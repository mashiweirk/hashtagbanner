window.addEventListener("load", function () {
    var pk = new Piklor(".color-picker", [
            "#1abc9c"
          , "#2ecc71"
          , "#3498db"
          , "#9b59b6"
          , "#34495e"
          , "#16a085"
          , "#27ae60"
          , "#2980b9"
          , "#8e44ad"
          , "#2c3e50"
          , "#f1c40f"
          , "#e67e22"
          , "#e74c3c"
          , "#ecf0f1"
          , "#95a5a6"
          , "#f39c12"
          , "#d35400"
          , "#c0392b"
          , "#bdc3c7"
          , "#7f8c8d"
          , "#ecf0f1"
          , "#C0C0C0"
          , "#808080"
          , "#000000"
          , "#25171c"
          , "#c4c1c4"
          , "#cfc5b7"
          , "#e1e9e1"
          , "#ffffff"
        ], {
            open: ".picker-wrapper .btn"
        })
      , wrapperEl = pk.getElm(".picker-wrapper")
      , header = pk.getElm("header")
      , footer = pk.getElm("footer")
      ;

    pk.colorChosen(function (col) {
        //wrapperEl.style.backgroundColor = col;
        //header.style.backgroundColor = col;
        //footer.style.backgroundColor = col;
        updateInfo(col);
    });
});
