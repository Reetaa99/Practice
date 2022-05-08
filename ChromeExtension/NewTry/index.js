// $(document).ready(function () {
//     var folder = "./images/";

//     $.get({
//         url: folder,
//         success: function (data) {
//             console.log(data);
//             $(data).find("a").attr("href", function (i, val) {
//                 if (val.match(/\.(jpeg|png|gif)$/)) {
//                     $("#photoCarousel").append("<img src='" + folder + val + "' crossorigin='anonymous'>");
//                 }
//             });
//         }
//     });
// })

const carousel = document.getElementById("photoCarousel");
