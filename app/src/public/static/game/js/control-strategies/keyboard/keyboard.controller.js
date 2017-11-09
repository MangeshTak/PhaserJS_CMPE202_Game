const KeyboardController = function(context) {
  this._hero = context.hero;
  this._keyboard = context.input;
  this._cursors = this._keyboard.createCursorKeys();
};

KeyboardController.prototype.update = function() {
  const cursors = this._cursors;
  const hero = this._hero;

  if (cursors.up.isDown) {
    hero.getAction('moveUp').perform();
  }
  else if (cursors.right.isDown) {
    hero.getAction('moveRight').perform();
  }
  else if (cursors.down.isDown) {
    hero.getAction('moveDown').perform();
  }
  else if (cursors.left.isDown) {
    hero.getAction('moveLeft').perform();
  } else {
    hero.stop();
  }
};