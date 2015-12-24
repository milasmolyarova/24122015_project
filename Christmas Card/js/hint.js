
    $('#skip').mouseover(function(event) {
        var target = event.target;
        target.style.background = '#00b16a';
        target.innerHTML = "GOT IT";
    });
    $('#skip').mouseout(function(event) {
        var target = event.target;
        target.style.background = ''; 
        target.innerHTML = "SKIP";
    });