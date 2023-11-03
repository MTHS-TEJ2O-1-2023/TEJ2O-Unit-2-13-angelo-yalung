/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo
 * Created on: Oct 2023
 * This program counts down in a loop and lights up neopixels that correspond to the number that is shown on the Microbit
*/

// variables
let neopixelStrip: neopixel.Strip = null
let loopcounter = 4

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
  while (loopcounter >= 0) {
    basic.pause(500)
    basic.showNumber(loopcounter)
    neopixelStrip.setPixelColor((3 - loopcounter), neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    loopcounter = loopcounter - 1
  }

})