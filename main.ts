/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Nov 2024
 * This program turns on pixels around the edge of the microbit
*/

// setup
let movement: number = 0
let rotations: number = 0
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  //setup
  rotations = 0
  sprite = game.createSprite(0, 0)
  while (rotations <= 3) {
    movement = 0
    while (movement <= 5) {
      basic.pause(500)
      sprite.move(1)
      movement = movement + 1
    }
    sprite.turn(Direction.Right, 90)
    rotations = rotations + 1
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
