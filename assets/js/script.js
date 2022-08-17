$(document).ready(() => {

    $('section').load('pages/home.html')
    $('#menuHome').addClass('active')

    function clearClass(params) {
        $('#menuHome').removeClass('active')
        $('#menuSobre').removeClass('active')
        $('#menuProdutos').removeClass('active')
        $('#menuContatos').removeClass('active')
    }

    $('#menuHome').click(() => {
        clearClass()
        $('#menuHome').addClass('pages/home.html')
        $('section').load('pages/home.html')
    })

    $('#menuSobre').click(() => {
        clearClass()
        $('#menuSobre').addClass('pages/sobre.html')
        $('section').load('pages/sobre.html')
    })

    $('#menuProdutos').click(() => {
        clearClass()
        $('#menuProdutos').addClass('pages/produtos.html')
        $('section').load('pages/produtos.html')
    })

    $('#menuContatos').click(() => {
        clearClass()
        $('#menuSobre').addClass('pages/contatos.html')
        $('section').load('pages/contatos.html')
    })

})






