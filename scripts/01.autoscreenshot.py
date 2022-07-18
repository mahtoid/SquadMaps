import pyautogui
import time
import keyboard

# r.setres 1920x1080w
# r.setres 3840x2160f

pyautogui.KEYBOARD_KEYS

print('Press F10 once Squad is focused')
keyboard.wait('f10')

with open('layers.txt') as layersFile:
    lines = layersFile.readlines()
    lines = [line.rstrip() for line in lines]

for line in lines:
    command = 'AdminChangeLayer ' + line
    print(command)
    pyautogui.hotkey('f9')
    pyautogui.write(command)
    pyautogui.hotkey('enter')

    command = 'AdminSlomo 100'
    print(command)
    pyautogui.hotkey('f9')
    pyautogui.write(command)
    pyautogui.hotkey('enter')

    print('Press Shift + P and then F10 when the map has been loaded')
    keyboard.wait('f10')

    print('Caps Lock')
    pyautogui.hotkey('capslock')
    time.sleep(1)

    print('F12')
    pyautogui.hotkey('f12')
    time.sleep(1)
