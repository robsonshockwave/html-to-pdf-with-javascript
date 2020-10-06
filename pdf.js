window.onload = function () { //window.onload vai esperar a página terminar de executar para receber a função
    document.getElementById("download") //pegando o id download da página html
        .addEventListener("click", () => { //.addEventListener serve para realizar o evento ao clicar ("click")
            const to_pdf = this.document.getElementById("to_pdf");
            console.log(to_pdf);
            console.log(window);
            var opt = {
                margin: 0.2,
                filename: 'nome_do_seu_pdf.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(to_pdf).set(opt).save();
        })
}