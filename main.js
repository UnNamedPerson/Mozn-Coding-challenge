window.onload = function(){
    var body = this.document.getElementById("body");
    var select = this.document.getElementById("select");
    for(var i = 0; i < 10; i++){
        var option = this.document.createElement("option");
        var num = i +1;
        option.appendChild(this.document.createTextNode("Period "+ num ));
        option.id = ("p"+num);
        option.value = num;
        select.appendChild(option);
    }

    select.onchange = function(){
        var bars = document.getElementById("barChart");
        while(bars.childElementCount > 0){
            bars.removeChild(bars.lastChild);
        }

        // go in a loop to make all bars
        if (select.value == "All Periods"){
            var num = 0;
            for(var i = 0; i < 10; i++){
                num = i + 1;
                bar = document.createElement("div");
                bar.id = ("period" + num);
                bar.className = "period";
                bars.appendChild(bar);
            }
        }

        else{ // or just create the one you selected
            bar = document.createElement("div");
            bar.id = ("period" + select.value);
            bar.className = "period";
            bars.appendChild(bar);
        }
    }
}

function selectPeriod(periodN){
    var chart = document.getElementById("barChart");
    var labelContainer = document.getElementById("labelContainter");
    var PeriodNum = 0;
    for (var i = 0; i < 10 ; i++){
        PeriodNum = i+1;
        chart.removeChild(document.getElementById("period" + PeriodNum));
        // labelContainer.removeChild(document.getElementById("period" + periodNum + "Text"));
    }
    var periodBar = document.createElement("div");
    periodBar.id = ("period" + periodN);
    periodBar.className = "period";

}