$(document).ready(function () {

    $("#secretSection").hide();

    // Controllo password con invio o click bottone
    $("#loginForm").on("submit", function (event) {
        event.preventDefault();

        const passwordInserita = $("#passwordInput").val();

        if (passwordInserita === "password") {
            $("#loginSection").hide();
            $("#secretSection").show();
        } else {
            $("#output").text("Password errata, riprova");
        }
    });

    // ---- BOTTONI SEZIONE SEGRETA ----

    $("#btn1").on("click", function () {
        $("#secretOutput").text("Così hai trovato l'area segreta, molto bene");
    });

    $("#btn2").on("click", function () {
        $("#secretOutput").text("Brava si vede che sei una sveglia, ora ti farò un indovinello");
    });

    $("#btn3").on("click", function () {
        $("#secretOutput").text("Che cosa fa miao come un gatto, cammina come un gatto e mangia come un gatto?");
    });

    $("#btn4").on("click", function () {
        $("#secretOutput").text("Esatto, io!");
    });

    $("#btn5").on("click", function () {
        $("#secretOutput").text("Questa sorpresa è per te, goditela");
    });

    $("#btn6").on("click", function () {
        $("#secretOutput").text("E adesso esplodo boooom! ah no aspe... non so fare le animazioni...");
    });

});