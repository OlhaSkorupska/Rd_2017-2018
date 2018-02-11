let getUsers = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users',
        success: function (data) {
            $.each(data.payload, function (index, value) {
                let row = $('<tr><td class="users__cell">' + value.email
                    + '</td><td class="users__cell">' + value.phone
                    + '</td><td class="users__cell">' + value.pass
                    + '</td><td class="users__cell">' + value.language
                    + '</td><td class="users__cell">' + value.picture
                    + '</td><td class="users__cell">' + value.name
                    + '</td><td class="users__cell">' + value.birth
                    + '</td><td class="users__edit" ' + 'id="' + value._id + '">'
                    + '</td></tr>');
                $('.users').append(row);
            });
        }
    });
};
function editCell(e) {
    let elem = e.target || e.srcElement;
    let elemName = elem.tagName.toLowerCase();
    if (elemName === 'input') {
        return false;
    }
    let buffer = $(this).html();
    let code = '<input type="text" class="input" value="' + buffer + '" />';
    $(this).empty().append(code);
    $(this).focus();
    $(this).blur(function ()	{
        let val = $(this).val();
        $(this).parent().empty().html(val);
    });
    /* // находим input внутри элемента с классом ajax и вставляем вместо input его значение
    $('.ajax').html($('.ajax input').val());
    //удаляем все классы ajax
    $('.ajax').removeClass('ajax');
    //Нажатой ячейке присваиваем класс ajax
    $(this).addClass('ajax');
    //внутри ячейки создаём input и вставляем текст из ячейки в него
    $(this).html('<input id="editbox" size="'+ $(this).text().length+'" type="text" value="' + $(this).text() + '" />');
    //устанавливаем фокус на созданном элементе
    $('#editbox').focus(); */
    // let target = e.target;
    // let elem = target.getAttribute('class');
}

function handlerCell(e) {
    let target = e.target;
    if (target.className !== 'users__edit') {
        return;
    }
    target.setAttribute('class', 'users__editable');
    $('.users__editable').siblings().addClass('cell-edit');
    $('.cell-edit').click(editCell);
}

window.onload = function () {
    getUsers();
    let table = document.getElementsByClassName('users')[0];
    table.addEventListener('click', handlerCell, false);
};

