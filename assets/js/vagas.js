$(document).ready(function () {
    // Quando um link das categorias é clicado
    $('.vagas-categories a').on('click', function (e) {
        e.preventDefault();  // Previne o comportamento padrão do link

        // Pega a categoria do link que foi clicado
        let selectedCategory = $(this).data('category');

        if (selectedCategory === "all") {
            // Se a categoria selecionada for "all", mostre todas as vagas
            $('.job-offer').show();
        } else {
            // Esconde todas as vagas
            $('.job-offer').hide();

            // Mostra as vagas que correspondem à categoria selecionada
            $('.job-offer[data-category="' + selectedCategory + '"]').show();
        }
    });
});
$(document).ready(function () {
    $(".vagas-categories a").click(function () {
        // Remove a classe 'category-active' de todos os links
        $(".vagas-categories a").removeClass("category-active");

        // Adiciona a classe 'category-active' no link que foi clicado
        $(this).addClass("category-active");
    });
});
