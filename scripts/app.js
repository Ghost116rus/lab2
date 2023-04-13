class Medicine{
    description;
    imageSrc;
    constructor(description, imageSrc){
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

var Special = [
    new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg"),
    new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg"),
    new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg"),
    new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg"),
    new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg")
];

var Medicines =
    [
        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg"),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg"),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg"),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg"),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg"),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg"),
        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg"),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg"),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg"),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg"),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg"),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg"),
        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg"),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg"),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg"),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg"),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg"),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg"),
        new Medicine("СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100","../img/medecine/1.jpg"),
        new Medicine("СофтЛайф премиум ватные диски прямоугольные черные №80","../img/medecine/2.jpg"),
        new Medicine("Будь Здоров! Рыбный жир 75мл","../img/medecine/3.jpg"),
        new Medicine("Будь Здоров! Грин фиточай Фитосбор №1 толокнянка ф/п 2г №20","../img/medecine/4.jpg"),
        new Medicine("АВС хэлси фуд клетчатка Сибирская стопаппетит 8,5г №14","../img/medecine/5.jpg"),
        new Medicine("Инвитро Здоровье щитовидной железы","https://cdn.budzdorov.ru/media/catalog/product/cache/1e8ef93b9b4867ab9f3538dde2cb3b8a/1/1/113044-c-0-8-9-c089a3e77f904efd2884c5ab3cdad57d3b9ebc0b_113044.jpg"),
    ];


var makeContent = function(Container, medicine) {
    var offers = $('<div/>', {
        class:  'offers',
    }).appendTo(Container);

    medicine.forEach(function (medic) {
        var offer = $('<div/>', {
            class:  'offer',
        }).appendTo(offers);
        var image = $('<a/>').attr("href", "DeliveryPage.html").appendTo(offer);
        var medicineImage = $('<img>', {
            src: medic.imageSrc,
            class: 'lazy',
        });
        medicineImage.attr("data-src", medic.imageSrc);
        medicineImage.appendTo(image);
        $('<a/>', {
            href: "DeliveryPage.html",
            text: medic.description
        }).appendTo(offer);
        console.log(medic.imageSrc)
    });
}

class AddContent{
    static special = false;
    static srcImage = "";
    static medicineDescription = "";

    static AddToSpecial()
    {
        AddContent.special = !AddContent.special;
    }

    static AddToContent()
    {
        AddContent.medicineDescription = document.getElementById('description').value;
        AddContent.srcImage = document.getElementById('imgSrc').value;

        console.log(AddContent.special);
        console.log(AddContent.medicineDescription);
        console.log(AddContent.srcImage);

        var medicine = new Medicine(AddContent.medicineDescription, AddContent.srcImage)

        if (AddContent.special) { Special.push(medicine);}
        Medicines.push(medicine);

        AddContent.special = false;
        AddContent.srcImage = "";
        AddContent.medicineDescription = "";

        $(".tabs a:first-child span").trigger("click");
    }

}



var main = function () {
    "use strict";

    $(".tabs a span").toArray().forEach(function (element) {
        //создаем обработку щелчков для этого элемента
        $(element).on("click", function ()
        {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<div>");
                makeContent($content, Special);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<div>");
                makeContent($content, Medicines);

            } else if ($element.parent().is(":nth-child(3)")) {
                $content = $("<div/>", {
                    class: 'addContent'
                });

                $('<p/>', {
                    text: "Добавить в спец. предложения",
                    class: 'checkB'
                }).appendTo($content);

                $('<input/>', {
                    id:     'myCheckbox',
                    type: 	'checkbox',
                    class: 'checkB',
                    onclick: "AddContent.AddToSpecial()"
                }).appendTo($content);

                $('<br/>', {
                }).appendTo($content);

                $('<input/>').attr({
                    id:     'imgSrc',
                    type: 	'text',
                    name: 	'img-src',
                    class:  'myinputImg',
                    placeholder: 	'Путь к изображению...'
                }).appendTo($content);

                $('<textarea/>').attr({
                    id:     'description',
                    type: 	'text',
                    name: 	'description',
                    class:  'myinputDsc',
                    placeholder: 	'Описание товара'
                }).appendTo($content);

                var mybutton = $('<button/>',
                    {
                        text: 'Добавить товар',
                        click: AddContent.AddToContent
                    }).appendTo($content);
            }
            $("main .content").append($content);

        })
        return false;
        });
    $(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);
