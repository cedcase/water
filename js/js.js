function openform() {
    /*window.open("form.html", "_blank");*/
    // var myForm = window.open("form.html", "Form Window", "height=500, width=400");
    var myForm = window.open("form.html", "Form Window") ;
  }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  