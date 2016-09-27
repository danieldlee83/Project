$(function () {

    var uri = 'api/contacts';
    var $info = $('#info');
    var $contactList = $('#contactList');
    var infoTemplate = $('#infoTemplate').html();
    var listTemplate = $('#listTemplate').html();
    var $searchBtn = $('#searchBtn');
    var $list = $('#list');
    var $contactValue = $('#contactValue');

    $(document).ready(function () { getContacts(); });

    function displayContacts(contacts) {
        $info.append(Mustache.render(infoTemplate, contacts));
    }

    function getContacts() {
        $.ajax({
            type: 'GET',
            url: uri,
            success: function (contacts) {
                $.each(contacts, function (i, contact) {
                    displayContacts(contact);
                });
            },
            error: function () {
                alert("Failure to get contacts.");
            }
        });
    }

    function displayContactsByName(contacts) {
        $list.append(Mustache.render(listTemplate, contacts));
    }

    $searchBtn.click(function () {
        var name = $contactValue.val();

        $.ajax({
            type: 'GET',
            url: uri + '/' + name,
            success: function (name) {
                displayContactsByName(name);
                $contactValue.val("");
            },
            error: function () {
                alert("Failure to get contacts.");
            }
       });
    });

    $(document).ready(function () {

        $contactValue.keyup(function (event) {
            if (event.keyCode == 13) {
                $searchBtn.click();
            }
        });
    });

    $info.delegate('.editContact', 'click', function () {
        var $tr = $(this).closest('tr');
        $tr.find('input.address').val($tr.find('span.address').html());
        $tr.find('input.contactNum').val($tr.find('span.contactNum').html());
        $tr.addClass('edit');
    });

    $info.delegate('.cancelEdit', 'click', function () {
        $(this).closest('tr').removeClass('edit');
    });

    $info.delegate('.remove', 'click', function () {
        var $tr = $(this).closest('tr');
            $.ajax({
                type: 'DELETE',
                url: uri+ "/" + $tr.attr('data-id'),
                success: function () {
                    $tr.fadeOut(100, function () {
                        getContacts();
                    });
                },
                error: function () {
                    alert('error deleting contact.');
                }
            });
    });

});