window.onload = function()
{
    var input = document.getElementById("tekst");
    var przycisk_oblicz = document.querySelector("button[class=oblicz]");
	var przycisk_kopiuj = document.querySelector("button[class=kopiuj]");
    var wynik = document.getElementById("wynik");

    var tekst = "";
    przycisk_kopiuj.disabled = true;

	przycisk_oblicz.onclick = function()
	{
        wynik.value = "";
        tekst = input.value;
        if(tekst.length === 0) 
		{
			przycisk_kopiuj.disabled = true;
			return false;
		}
		tekst = tekst.replaceAll("Dz. Ap.", "Dzieje");
		tekst = tekst.replaceAll("PnP", "Pieśń");
		tekst = tekst.replaceAll("Kaz. Sal.", "Kazn.");
		tekst = tekst.replaceAll("Mich.", "Micheasza");
		tekst = tekst.replaceAll("Mar.", "Marka");
		tekst = tekst.replaceAll("Fil.", "Filip.");
		tekst = tekst.replaceAll(/Juda\s(\d)/g, "Judy $1");
		tekst = tekst.replaceAll("Abak.", "Habak.");
		tekst = tekst.replaceAll(/Ruty\s(\d)/g, "Rut $1");

        wynik.value = tekst;

		przycisk_kopiuj.disabled = false;
        return false;
	}

	przycisk_kopiuj.onclick = function()
	{
		navigator.clipboard.writeText(wynik.value);
		var okienko = document.getElementById("okienko");
		okienko.innerHTML = "Skopiowano!";

		return false;
	}
};

function outFunc() {
	var okienko = document.getElementById("okienko");
	okienko.innerHTML = "Kopiuj do schowka";
}
