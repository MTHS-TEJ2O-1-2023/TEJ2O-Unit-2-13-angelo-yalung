/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
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
  // colors
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  
  // loopcounter
  loopcounter = 4
  while (loopcounter >= 0) {
    basic.pause(500)
    basic.showNumber(loopcounter)
    neopixelStrip.setPixelColor(loopcounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    loopcounter = loopcounter - 1
    basic.showIcon(IconNames.Happy)
  }
})
