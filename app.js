var forms = function (first, last) {

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

forms("Firstname", "Lastname");
forms("Address", "Phone");
forms("Job Title", "Salary");
forms("Location", "Education");


var h1 = function (text) {

    var h1Tag = $("<h1>");
    var h1TagEnd = $("</h1>")
    var h1Input = (text);

    h1Tag.append(h1Tag, h1Input, h1TagEnd)

    $("body").append(h1Tag)

}

h1("this is a header")
h1("this is another header")
h1("this is the third header")
h1("this code is so reusable")
h1("and so easy to use")