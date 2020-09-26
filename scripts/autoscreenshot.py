import pyautogui
import time

try:
    # while True:
    #     x, y = pyautogui.position()
    #     positionStr = 'X: ' + str(x).rjust(4) + 'Y: ' + str(y).rjust(4)
    #     print(positionStr, end='')
    #     print('\b' * len(positionStr), end='', flush=True)
    time.sleep(2)
    pyautogui.typewrite('Hello world!', interval=0)
except KeyboardInterrupt:
    print('\nDone.')

