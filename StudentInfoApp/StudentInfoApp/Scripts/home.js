$(function () {

    var uri = 'api/contacts';
    var $info = $('#info');
    var infoTemplate = $('#infoTemplate').html();


    $(document).ready(function () { getContacts(); });

    function displayContacts(contacts) {
        $info.append(Mustache.render(infoTemplate, contacts));
    }

    function getContacts() {
        $.ajax({
            type: 'GET',
            url: uri,
            success: function (contacts) {
                $info.empty();
                $.each(contacts, function (i, contact) {
                    displayContacts(contact);
                });
            },
            error: function () {
                alert("Failure to get contacts.");
            }
        });
    }

    //function find() {
    //    var id = $('#prodId').val();
    //    $.getJSON(uri + '/' + id)
    //        .done(function (data) {
    //            $('#product').text(formatItem(data));
    //        })
    //        .fail(function (jqXHR, textStatus, err) {
    //            $('#product').text('Error: ' + err);
    //        });
    //}












});