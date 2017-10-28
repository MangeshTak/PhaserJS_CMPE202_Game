var game = new Phaser.Game(800, 600, Phaser.AUTO, '',{ preload: preload, create: create, update: update });

function preload() {

    game.load.tilemap('mymap', 'assets/Layer1.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tiles', 'assets/trees.png');

}

var map;
var layer;
var cursors;

function create() {

    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
//    map = game.add.tilemap('map', 16, 16);
    map = game.add.tilemap('mymap',16,16,10,10);
    //  Now add in the tileset
    map.addTilesetImage('tiles');
    
    //  Create our layer
    layer = map.createLayer(0);

    //  Resize the world
    layer.resizeWorld();

    //  Allow cursors to scroll around the map
    cursors = game.input.keyboard.createCursorKeys();

    var help = game.add.text(16, 16, 'Arrows to scroll', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

}

function update() {

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }

}

