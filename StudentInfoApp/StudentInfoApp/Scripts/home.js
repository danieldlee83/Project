$(function () {

    var uri = 'api/contacts';
    var $info = $('#info');
    var $contactList = $('#contactList');
    var infoTemplate = $('#infoTemplate').html();
    var listTemplate = $('#listTemplate').html();

    $(document).ready(function () { getContacts(); });

    function displayContacts(contacts) {
        $info.append(Mustache.render(infoTemplate, contacts));
    }

    function dispayContactsByName(contacts) {
        $contactList.append(Mustache.render(listTemplate.contacts))
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

    function searchById() {
        var id = $('#id').val();
        $.ajax({
            type: 'GET',
            url: uri + "/" + id,
            success: function (data) {
                dispayContactsByName(data)
            },
             error: function () {
                 alert("Failure to get contacts.");
            }
        });
     }
    












});