import eel

# start the contorller by importing it
from python_back_end import to_do_controller

# init web directory
eel.init("web_client")


# start the entry file index.html file from web_client directory
eel.start("index.html", size=(800, 480), position=(0, 0))
