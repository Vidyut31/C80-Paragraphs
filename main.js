function getParagraph1()
{
    var inputs = [];
    for (i = 1; i <= 6; i++)
    {
        inputs.push(document.getElementById("para1_input_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph_1").innerHTML = inputs;
        
}
function getParagraph2() {
    var inputs = [];
    for (i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para2_input_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph_2").innerHTML = inputs;

}