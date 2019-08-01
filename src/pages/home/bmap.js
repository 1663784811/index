export function MP() {


    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=ysiGxkleHvbefm3HDrsKKmsbRVw7vg06&callback=initialize';
    document.body.appendChild(script);

    setTimeout(function () {
        console.log("--sssssssssssssssssssssssssssssssssss--=-", BMap)
    }, 1000);
}

function initialize() {
    console.log("=================")
}