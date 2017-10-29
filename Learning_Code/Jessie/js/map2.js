
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('mymap1', 'assets/Layer1.csv', 'test.csv', Phaser.Tilemap.CSV);
    game.load.tilemap('mymap2', 'assets/Layer2.csv', 'test.csv', Phaser.Tilemap.CSV);
    game.load.tilemap('mymap2', 'assets/Layer3.csv', 'test.csv', Phaser.Tilemap.CSV);
    game.load.image('tiles', 'assets/town.png');
    game.load.spritesheet('player', 'assets/dude.png', 16, 16);

}

var map;
var layer;
var cursors;
var player;

function create() {

    map = game.add.tilemap('mymap2', 64, 64,15,5);


    //  Now add in the tileset
    map.addTilesetImage('tiles');
    
    //  Create our layer
    layer = map.createLayer(0);

    //  Resize the world
    layer.resizeWorld();

   
    map.setCollisionBetween(54, 83);

    
    //  Player
    player = game.add.sprite(48, 48, 'player', 1);
    player.animations.add('left', [8,9], 10, true);
    player.animations.add('right', [1,2], 10, true);
    player.animations.add('up', [11,12,13], 10, true);
    player.animations.add('down', [4,5,6], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.setSize(10, 14, 2, 1);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

    var help = game.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

}

function update() {

}

function render() {

    // game.debug.body(player);

}
