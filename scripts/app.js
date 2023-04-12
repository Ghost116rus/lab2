var main = function () {
    "use strict";

    var toDos = [
        "Закончить писать эту книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты"
    ];

    var toDDos =
        [
            "Купить продукты",
            "Обновить несколько новых задач",
            "Подготовиться к лекции в понедельник",
            "Ответить на электронные письма",
            "Вывести Грейси на прогулку в парк",
            "Закончить писать эту книгу"
        ];

    var makeContent = function(Container) {
        var offers = $('<div/>', {
            class:  'offers',
        }).appendTo(Container);

        var offer = $('<div/>', {
            class:  'offer',
        }).appendTo(offers);
        var image = $('<a/>').attr("href", "DeliveryPage.html").appendTo(offer);
        $('<img>').attr("src","../img/medecine/1.jpg").appendTo(image);
        $('<a/>', {
            href: "DeliveryPage.html",
            text: "СофтЛайф WWW премиум ватные палочки на бумажной основе с добавлением бамбука №100"
        }).appendTo(offer);
    }

    $(".tabs a span").toArray().forEach(function (element) {
        //создаем обработку щелчков для этого элемента
        $(element).on("click", function () {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (let i = 1; i <= toDos.length; i++)
                {
                    $content.append($("<li>").text(toDos[toDos.length - i]));
                }
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(3)")) {
                $content = $("<div>");
                makeContent($content);


            }
            $("main .content").append($content);
        })
            return false;
        });
    $(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);

// <a href="#"><img src="../img/medecine/1.jpg"></a>
// <a href="#">СофтЛайф премиум ватные палочки на бумажной основе с добавлением бамбука №100</a>