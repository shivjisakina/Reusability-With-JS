var app = function (first, last) {

    var form = $("<form>");

    var firstnameInput = $("<input>");
        firstname = $("<label>");
        firstname.text(first);

    var lastnameInput = $("<input>");
        lastname = $("<label>");
        lastname.text(last);

    var break1 = $("<br>");

    form.append(firstname, firstnameInput, break1, lastname, lastnameInput)

    $("body").append(form)
}

app("Firstname", "Lastname");