/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo
 * Created on: Oct 2023
 * This program counts down in a loop and lights up neopixels that correspond to the number that is shown on the Microbit
*/

// variables
let neopixelStrip: neopixel.Strip = null
let loopCounter: number

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
  // loopCounter and setup
  loopCounter = 4
  basic.clearScreen()
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

  // 4 neo pixels
  while (loopCounter >= 0)
  basic.showNumber(loopCounter)
  neopixelStrip.show()
  pause(1000)
})
