$(function(){
    var b=1484418600000;
    var g=[];
    var a=[5,-5,3,-3,8,-8];
    for(var d=0;d<120;d++){
        b=b+86400000;
        var f=[b,dataSeries[1][d].value];
        g.push(f)}
        var c={chart:{
            type:"area",
            stacked:false,
            height:340,
            zoom:{type:"x",enabled:true},
            toolbar:{show:false,autoSelected:"zoom"}},
            dataLabels:{enabled:false},
            series:[{name:"Social Activity",data:g}],
            markers:{size:0,},
            stock:{width:1,},
            fill:{type:"gradient",
            gradient:{
                shadeIntensity:1,
                inverseColors:false,
                opacityFrom:0.5,
                opacityTo:0,
                stops:[0,90,100]},},
                yaxis:{
                    min:20000000,
                    max:250000000,
                    labels:{
                        formatter:function(h){
                            return(h/1000000).toFixed(0)},},
                            title:{text:"Price"},},
                            xaxis:{type:"datetime",},
                            tooltip:{
                                shared:false,y:{formatter:function(h){return(h/1000000).toFixed(0)}}}};
                                
        var e=new ApexCharts(document.querySelector("#zoomableTimeSeries"),c);e.render()});