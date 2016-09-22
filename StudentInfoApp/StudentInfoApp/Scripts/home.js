$(function () {

    var uri = 'api/contacts';
    var $info = $('#info');
    var $contactList = $('#contactList');
    var infoTemplate = $('#infoTemplate').html();
    var listTemplate = $('#listTemplate').html();
    var $btn = $('#btn');
    var $list = $('#list');

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

    $btn.click(function(){
        var name = $('#contactValue').val();

        $.ajax({
            type: 'GET',
            url: uri + '/' + name,
            success: function (name) {
                displayContactsByName(name);
            },
            error: function () {
                alert("Failure to get templates.");
            }
       });
    });

});