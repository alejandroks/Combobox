/// <reference path='jQuery.d.ts' /> 

function MyCombobox(object) {

    var dataSorceLoad = true;

    var wrapper = $("<div class='ComboBox1'></div>");

    var listString = $("<div class='listString'></div>").html(object.value);

    var buttonSkroll = $("<div class='Skroling'></div>").html("X");

    var divOverFlow = $("<div class='divOwer'></div>").hide();

    buttonSkroll.click(function onClikButton(object1) {
        if (dataSorceLoad) {
            var listUL = $('<ul></ul>');
            listUL.addClass('listul');
            var list = [];
            for (var i = 0; i < object.dataSource.length; i++) {
                list[i] = $("<li></li>");
                list[i].html(object.dataSource[i]);
                listUL.append(list[i]);
            }
            divOverFlow.append(listUL)
            object.current.append(divOverFlow);
            dataSorceLoad = false;
        }
        divOverFlow.is(':visible') ? divOverFlow.hide() : divOverFlow.show();
    })

    wrapper.append(listString);
    wrapper.append(buttonSkroll);
    object.current.append(wrapper);
}