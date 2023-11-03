"""
Created by: Angelo Yalung
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import neopixel

num_pixels = 12
np = neopixel.NeoPixel(pin16, 4)
loopcounter = 0

display.clear()
np[0] = (0, 0, 0)
np[1] = (0, 0, 0)
np[2] = (0, 0, 0)
np[3] = (0, 0, 0)
np.show()
display.show(Image.HAPPY)

if button_a.is_pressed():
    loopcounter = 4
    display.clear()
    np[0] = (255, 0, 0)
    np[1] = (255, 0, 0)
    np[2] = (255, 0, 0)
    np[3] = (255, 0, 0)
    while loopcounter >= 0:
        display.show(loopcounter)
        np.show()
        sleep(500)
        loopcounter = loopcounter - 1
        np[loopcounter] = (0, 0, 0)