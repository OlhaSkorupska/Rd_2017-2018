let getUsers = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users',
        crossDomain: true,        
        success: function (data) {
            $.each(data.payload, function (index, value) {
                let row = $('<tr><td class="users__cell" name="email">' + value.email
                    + '</td><td class="users__cell" name="phone">' + value.phone
                    + '</td><td class="users__cell" name="pass">' + value.pass
                    + '</td><td class="users__cell" name="language">' + value.language
                    + '</td><td class="users__cell" name="picture">' + value.picture
                    + '</td><td class="users__cell" name="name">' + value.name
                    + '</td><td class="users__cell" name="birth">' + value.birth
                    + '</td><td class="users__edit" ' + 'id="' + value._id + '">'
                    + '</td><td class="users__delete" ' + 'id="' + value._id + '">'
                    + '</td></tr>');
                $('.users').append(row);
            });
        }
    });
};

function editCell(e) {
    $('.cell-edit').each(function (i, elem) {
        if ($(elem).children('.input').length === 0) {
            let buffer = $(this).html();
            let code = '<input type="text" class="input" value="' + buffer + '" />';            
            $(this).empty().append(code);
            $(this).blur(function ()	{
                let val = $(this).val();
                $(this).parent().empty().html(val);
            });
        }
    });
}

function saveCell(id) {
    let main = $('[id=' + id + ']');
    let siblings = main.siblings().removeClass('cell-edit');
    $(siblings).each(function (i, elem) {
        if ($(elem).children('.input').length !== 0) {
            let buffer = $(elem).children('.input')[0].value;
            $(elem).empty().append(buffer);
        }
    });
    $('.users__editable').addClass('users__edit').removeClass('users__editable');    
}

function error() {
    console.log('error');
}

let deleteUser = (id) => {
    return $.ajax({
        type: 'delete',
        url: 'http://localhost:4010/api/v1/users/' + id,
        contentType: "application/json; charset=utf-8",        
        success: function (data) {
            alert('success');
        },
        error: function (data) {
            alert('error');
        }               
    });
};

let updateUser = (data, id) => {
    return $.ajax({
        type: 'patch',
        url: 'http://localhost:4010/api/v1/users/' + id,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (data) {
            alert('success');
        },
        error: function (data) {
            alert('error');
        }        
    });    
};

function clear() {
    $('.users').empty();
}

function handlerCell(e) {
    let target = e.target;
    if (target.className === 'users__editable') {
        let record = $('.users__editable').siblings('.cell-edit');
        var data = {};
        $(record).each(function (i, elem) {
            let value = $(elem).children('.input')[0].value;
            let key = $(elem)[0].getAttribute('name');
            data[key] = value; 
        });
        updateUser(data, $('.users__editable')[0].getAttribute('id'))
            .then(saveCell($('.users__editable')[0].getAttribute('id')))
            .catch(error);             
    } else if (target.className === 'users__edit') {
        target.setAttribute('class', 'users__editable');
        $('.users__editable').siblings().addClass('cell-edit');
        $('.users__delete').removeClass('cell-edit');
        editCell();
    } else if (target.className === 'users__delete') {
        $(target).addClass('delete-now');
        deleteUser($('.delete-now')[0].getAttribute('id'))
            .then(clear)
            .then(getUsers)
            .catch(error);            
    }
}

window.onload = function () {
    getUsers();
    let table = document.getElementsByClassName('users')[0];
    table.addEventListener('click', handlerCell, false);
};
