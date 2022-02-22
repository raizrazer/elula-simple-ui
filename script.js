window.onload = function() {

    const toggler = $(".switch-input").click(() => {
        $("body").toggleClass("dark-mode");
    })

    $(".pointer").click((e) => {
        alert("No implemented yet! Sorry, But the dark mode works.")
    })

}