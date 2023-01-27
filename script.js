var breedImage = $("#breed-image");
var dropDown = $("#dog-breeds");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropDown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropDown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (e) {
    e.preventDefault();

    if (allowSubmit) {
        breed = dropDown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}
