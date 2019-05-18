
$(document).ready(function () {
    $("#SearchInput").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "/EpiserverFindSearchPage/GetSuggestions",
                data: JSON.stringify({ term: $('#SearchInput').val() }),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    response($.map(data, function (item) {

                        return {
                            value: item
                        }
                    }))
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }
            });
        },
        open: function (event, ui) {
            $('.ui-menu').css('display', 'block');
            $('.ui-autocomplete').css({ 'padding-top': '5px', 'background': 'white', 'cursor': 'pointer', 'margin-top': '11px', 'width': '494px', 'z-index': '999', 'list-style': 'none', 'padding-left': '5px', 'font-size': '14px', 'border': '1px solid #d0d0d0' });
            $('.ui-menu-item').css({ 'padding-bottom': '5px', 'font-weight': '300', 'color': 'black' });
            $('.ui-menu-item').css('margin-top', '5px');
            $('.ui-menu-item a').css({ 'color': 'black', 'font-weight': '300' });
            $('.ui-helper-hidden-accessible').css({ 'display': 'none' });
        },
        focus: function (event, ui) {
            event.target.value = ui.item.label;
        },

        minLength: 2
    });
});
