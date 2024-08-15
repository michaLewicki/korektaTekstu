window.onload = function()
{
	var k = document.getElementsByClassName("kryteria");
    var i;
    for (i = 0; i < k.length; i++) {
      k[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        
        if (content.style.display === "inline-block") {
          content.style.display = "none";
        } else {
          content.style.display = "inline-block";
        }
      });
    }


    var input = document.getElementById("tekst");
    var przycisk_oblicz = document.querySelector("button[class=oblicz]");
	var przycisk_kopiuj = document.querySelector("button[class=kopiuj]");
    var wynik = document.getElementById("wynik");
	var wynik_oryg = document.getElementById("wynik_oryg");
	
	var tekst = ["", "", ""]; //oryg, wynik, do_skopiowania

    przycisk_kopiuj.disabled = true;

	przycisk_oblicz.onclick = function()
	{
        wynik.value = "";
        tekst[0] = input.value;
		tekst[1] = input.value;
		tekst[2] = input.value;

        if(tekst[0].length === 0) 
		{
			przycisk_kopiuj.disabled = true;
			tekst[0] = "";
			tekst[1] = "";
			tekst[2] = "";

			wynik.innerHTML = "";
			wynik_oryg.innerHTML = "";
			return false;
		}
		zaznacz_i_zamien(tekst, /(Dz\.\sAp\.)(\s\d)/g, "Dzieje");
		zaznacz_i_zamien(tekst, /(PnP)(\s\d)/g, "Pieśń");
		zaznacz_i_zamien(tekst, /(Kaz\.\sSal\.)(\s\d)/g, "Kazn.");
		zaznacz_i_zamien(tekst, /(Mich\.)(\s\d)/g, "Micheasza");
		zaznacz_i_zamien(tekst, /(Mar\.)(\s\d)/g, "Marka");
		zaznacz_i_zamien(tekst, /(Fil\.)(\s\d)/g, "Filip.");
		zaznacz_i_zamien(tekst, /(Juda)(\s\d)/g, "Judy");
		zaznacz_i_zamien(tekst, /(Abak\.)(\s\d)/g, "Habak.");
		zaznacz_i_zamien(tekst, /(Ruty)(\s\d)/g, "Rut");

        wynik_oryg.innerHTML = tekst[0];
        wynik.innerHTML = tekst[1];

		przycisk_kopiuj.disabled = false;
        return false;
	}

	przycisk_kopiuj.onclick = function()
	{
		navigator.clipboard.writeText(tekst[2]);
		var okienko = document.getElementById("okienko");
		okienko.innerHTML = "Skopiowano!";

		return false;
	}
};

function outFunc() {
	var okienko = document.getElementById("okienko");
	okienko.innerHTML = "Kopiuj do schowka";
}

function zaznacz_i_zamien(t, s1, s2) {
	t[2] = t[2].replaceAll(s1, s2 + "$2");
	
	t[0] = t[0].replaceAll(s1, "<mark>$1</mark>$2");
	t[1] = t[1].replaceAll(s1, "<mark>" + s2 + "</mark>$2");

	t[0] = t[0].replaceAll(/\n/g, "<br>");
	t[1] = t[1].replaceAll(/\n/g, "<br>");
}
