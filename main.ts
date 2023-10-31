/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo
 * Created on: Oct 2023
 * This program counts down in a loop and lights up neopixels that correspond to the number that is shown on the Microbit
*/

// variables 
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  while (true) {
  // number 4 and 4 neopixels
  basic.showNumber(4)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()
  basic.pause(500)
  
  // number 3 and 3 neopixels
  basic.showNumber(3)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()
  basic.pause(500)

  // number 2 and 2 neopixels
  basic.showNumber(2)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()
  basic.pause(500)

  // number 1 and 1 neopixels
  basic.showNumber(1)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()
  basic.pause(500)

  // no neopixels and #0
  basic.showNumber(0)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.pause(500)
  }
})
