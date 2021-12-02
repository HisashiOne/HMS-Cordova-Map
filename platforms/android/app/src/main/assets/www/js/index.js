let map;
let log;
let components = {};
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

async function onDeviceReady() {
    document.getElementById("initMap").onclick = initMap;
    document.getElementById("animateCamera").onclick = animateCamera;
    document.getElementById("showMap").onclick = showMap;
    document.getElementById("hideMap").onclick = hideMap;
    document.getElementById("destroyMap").onclick = destroyMap;
    //document.getElementById("navigate").onclick = navigate;
    HMSMap.requestPermission();

}

function onOverlayButtonClicked() {
    console.log("<br>" + "Overlay button clicked" + log.innerHTML);
}

async function enableMapPointers() {
    const isMapPointersEnabled = await map.isMapPointersEnabled();
    if(!isMapPointersEnabled){
        await map.setMapPointersEnabled(true);
    }
}
async function disableMapPointers() {
    const isMapPointersEnabled = await map.isMapPointersEnabled();
    if(isMapPointersEnabled){
        await map.setMapPointersEnabled(false);
    }
}

async function addMarkerInfo(){
    await map.setInfoWindowAdapter({"file":"www/marker_info.html","width":100,"height":100});
}

async function addMarkerAnim(){
    let marker = map.getComponent("Marker102");
    const animationSet = new HMSMap.AnimationSet();
    animationSet.addRotateAnimation({fillMode: HMSMap.AnimationConstant.FILL_MODE_BACKWARDS, fromDegree: 0, toDegree: 170, duration: 1200, repeatCount: 3,
        animationStart: ()=>{
            console.log("rotate animation started");
        },
        animationEnd: () => {
            console.log("rotate animation end");
        }});

    animationSet.addAlphaAnimation({fillMode: HMSMap.AnimationConstant.FILL_MODE_BACKWARDS, fromAlpha:0.8, toAlpha:0.2, duration: 1000, repeatCount:3,
        animationStart: ()=>{
            console.log("rotate alpha started");
        },
        animationEnd: ()=>{
            console.log("rotate alpha end");
        }});

    await marker.setAnimation(animationSet);
    await marker.startAnimation();
}
async function initMap(){
    let mapOptions = {"cameraPosition": {"target": {"lat": 40.7587658, "lng": 30.3146964}, "zoom": 2}};
    map = await HMSMap.getMap("map", mapOptions,{});
    await map.getUiSettings().setMyLocationButtonEnabled(true);
    await map.setMyLocationEnabled(true);
    map.getProjection().getVisibleRegion().then(vr => console.log(JSON.stringify(vr)));
    map.getProjection().toScreenLocation({lat: 12, lng: 43}).then(point => console.log(JSON.stringify(point)));
    map.getProjection().fromScreenLocation({x: 300, y: 600}).then(latLng => console.log(JSON.stringify(latLng)));
}

async function destroyMap(){
    await map.destroyMap();
}

function addDiv(){
    const div = document.createElement("div");
    div.innerHTML = 'This demo DIV block was inserted into the page using JavaScript. This demonstrates how MapView reacts to dynamic page changes.';
    div.style.height = "100px";
    document.getElementById("log").after(div);

    block = document.createElement('div');
    block.innerHTML = 'This demo DIV block was inserted into the page using JavaScript. This demonstrates how MapView reacts to dynamic page changes.';
    block.style.height = "100px";
    container_block = document.getElementById('wrapper');
    container_block.appendChild(block);
}

async function removeComponent(){
    const input = document.getElementById("inputField").value;
    const component = components[input];
    console.log(JSON.stringify(map));
    await map.removeComponent(input);
}

async function showMap(){
    map = await HMSMap.showMap("map");
    map.scroll();
}

async function hideMap(){
    await map.hideMap();
}

function navigate(){
    window.location.href="second.html";
    map.hideMap();
}

async function addMarker(){
    const markerOptions = {"position": {"lat": 36, "lng": 23}};
    let marker = await map.addMarker(markerOptions);
    components[marker.getId()] = marker;
}

async function addCircle(){
    const circleOptions = {
        "center": {"lat": 40.7587658, "lng": 30.3146964},
        "radius": 10000,
        "fillColor": -65281,
        "clickable": true
    };

    let circle = await map.addCircle(circleOptions);
    components[circle.getId()] = circle;
}
async function addPolyline(){
    const polylineOptions = {
        points: [{lat: 54.5, lng: -0.1}, {lat: 42.7, lng: -72.0}],
        color: -65536,
        width: 5.0,
        clickable: true
    };
    let polyline = await map.addPolyline(polylineOptions);
    components[polyline.getId()] = polyline;
}
async function addPolygon(){
    const polygonOptions = {
        "points": [{"lat": 25, "lng": 35}, {"lat": 30, "lng": 35},{"lat": 27, "lng": 45}]
        ,"fillColor":-65536
        ,"clickable":true};
    let polygon = await map.addPolygon(polygonOptions);
    components[polygon.getId()] = polygon;
}
async function addGroundOverlay(){
    const groundOverlayOptions = { "position": {"latLng": {"lat": 38, "lng": 27},"width": 300000,"height": 500000},
        "image":{"hue":210},
        "transparency":0,
        "visible":true,
        "zIndex":4,
        "bearing":4,
    };

    let groundOverlay = await map.addGroundOverlay(groundOverlayOptions);
    components[groundOverlay.getId()] = groundOverlay;
}
async function addTileOverlay(){
    const tileOverlayOptions = {
        tileProvider: {
            type: HMSMap.TileType.REPETITIVE_TILE,
            data: {
                width: 256,
                height: 256,
                zoom: [2, 3, 4, 5, 6],
                path: "www/icon/huawei.png"
            }
        },
        transparency: 0.5
    };
    const tileOverlay = await map.addTileOverlay(tileOverlayOptions);
    components[tileOverlay.getId()] = tileOverlay;
}
async function animateCamera(){
    let position = {"target": {"lat": 38, "lng": 26}, "zoom": 6, "bearing": 30, "tilt": 0};
    await map.animateCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position),{
        onFinish: ()=> {
            console.log("Javascript onFinish called")
        },
        onCancel: ()=> {
            console.log("Javascript onCancel called")
        }
    },1000);
}

