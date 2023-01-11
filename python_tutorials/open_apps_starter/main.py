import os
import eel

# init web directory
eel.init("web_client")


@eel.expose
def get_data():
    return "some awesome news returned"


@eel.expose
def send_data(data):
    # pyton way of calling shell
    print(data)
    # call shell directly from build-in os package
    os.system("echo 'hi from shell'")


# start the entry file index.html file from web_client directory
eel.start("index.html", size=(800, 480), position=(0, 0))
