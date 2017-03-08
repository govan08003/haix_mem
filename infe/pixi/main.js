var renderer = new PIXI.autoDetectRenderer(800, 600, {
    view: document.getElementById('main'),
    backgroundColor: 0xABC587
})

var stage = new PIXI.Container();

var normalText = new PIXI.Text("中文也可以嗎？");
normalText.position.set(300, 150);

var styleText = new PIXI.Text('對唷！中文也可以！', {
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: '微軟正黑體',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 350
})

styleText.position.set(100, 330);

stage.addChild(
    normalText,
    styleText
)

requestAnimationFrame(animate);

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}
