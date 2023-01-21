// opkald nr. h2
// tidspunkt h4
// navn h3
// text p

let h3text = "Navn: Jason Gunge";
let ptext = "Tekst: Jeg laver en video omkring JavaScript og HTML. og det er fedt.";

function opkald() {
    // create box (div) and add to id="opkaldsboksen"
    var box = document.createElement("div");
    box.className = "opkaldsboks";
    document.getElementById("opkaldsboksen").appendChild(box);
    // create h2 and add to box
    var h2 = document.createElement("h2");
    h2.className = "opkaldsnummer";
    h2.innerHTML = "Opkald nr. " + (document.getElementsByClassName("opkaldsboks").length);
    box.appendChild(h2);
    // create h3 and add to box
    var h3 = document.createElement("h3");
    h3.className = "navn";
    h3.innerHTML = h3text;
    box.appendChild(h3);
    // create p and add to box
    var p = document.createElement("p");
    p.className = "text";
    // add some text to value
    p.innerHTML = ptext;
    box.appendChild(p);
    var h4 = document.createElement("h4");
    h4.className = "tidspunkt";
    h4.innerHTML = "Tidspunkt: " + new Date().toLocaleString();
    box.appendChild(h4);
}