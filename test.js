function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


var myGauge = Gauge(document.getElementById("methan"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 77,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return Math.round(val);} // returns a string label that will be rendered in the center
});

var myGauge2 = Gauge(document.getElementById("c02"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 30,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return Math.round(val);} // returns a string label that will be rendered in the center
});
var myGauge3 = Gauge(document.getElementById("oxygen"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 50,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return Math.round(val);} // returns a string label that will be rendered in the center
});


(function loop() {
    var value1 = Math.random() * 100,
        value2 = Math.random(),
        value3 = Math.random() * 100,
        value4 = Math.random() * 100,
        value5 = Math.random() * 200;

    myGauge.setValue(value1-20, 1);
    myGauge2.setValueAnimated(20-value2, 1);
    myGauge3.setValueAnimated(50 - value3, 3);
    window.setTimeout(loop, 4000);
  })();