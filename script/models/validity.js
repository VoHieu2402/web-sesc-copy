function Validity() {
    // check null
    this.nullCheck = function(value,errorId,mess) {
        if(value.length==0) {
            document.getElementById(errorId).style.display = "block";
            document.getElementById(errorId).innerHTML = "<p>" + mess + "</p>";
            return false;
        } else {
            document.getElementById(errorId).style.display = "none";
            document.getElementById(errorId).innerHTML = "<p></p>";
            return true;
        }
    };
}