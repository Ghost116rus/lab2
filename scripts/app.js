

var main = function () {
    "use strict";

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

    var makeContent = function(Container, medic) {
        var offers = $('<div/>', {
            class:  'offers',
        }).appendTo(Container);

        medic.forEach(function (medicine) {
            var offer = $('<div/>', {
                class:  'offer',
            }).appendTo(offers);
            var image = $('<a/>').attr("href", "DeliveryPage.html").appendTo(offer);
            var medicineImage = $('<img>', {
                src: medicine.imageSrc,
                class: 'lazy',
            });
            medicineImage.attr("data-src", medicine.imageSrc);
            medicineImage.appendTo(image);
            $('<a/>', {
                href: "DeliveryPage.html",
                text: medicine.description
            }).appendTo(offer);
            console.log(medicine.imageSrc)
        });
    }

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
                $content = $("<div>");
            }
            $("main .content").append($content);

        })
        return false;
        });
    $(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);
