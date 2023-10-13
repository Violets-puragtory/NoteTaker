function openSelect(opcl) {
    $("#noteSelect").css("opacity", +opcl)
    setTimeout(() => {
        $("#noteSelect").css("scale", +opcl)
    }, 400 * (1 - +opcl));
}