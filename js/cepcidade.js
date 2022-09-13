$(document).ready(function() {
    $('#UF').Change(function(e) {
        e.preventDefault()

        var uf = $('#UF').val()
        var find = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: find,
            success: function(dados) {
                $('#local').val(dados.distritos)
            }
        })

    })
})