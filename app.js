// DropDowns
function toggledrop() {
    document.getElementById("drop-content").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("drop-content");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.btnlog')) {
        var myDropdown = document.getElementById("drop");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.btnactive')) {
        var myDropdown = document.getElementById("drop-active");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.btnfilter')) {
        var myDropdown = document.getElementById("filter");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function maintoggle() {
    document.getElementById("drop").classList.toggle("show");
}

function toggleActive() {
    document.getElementById("drop-active").classList.toggle("show");
}

function filterdrop() {
    document.getElementById("filter").classList.toggle("show");
}

function render() {

    axios.get('db.json')
        .then(res => {
            data = res.data;
            console.log(data);
            var template = document.getElementById("clienttpl").innerHTML;
            var html = Mustache.render(template, data);
            document.getElementById("wrapper-profile").innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
};
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("bell").style.display = "none";
    }
  }
  
  var x = window.matchMedia("(max-width: 425px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
