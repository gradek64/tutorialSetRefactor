import os
import eel

# init web directory
eel.init("web_client")


@eel.expose
def send_data(app):
    # call shell directly from build-in os package
    os.system("echo 'start app'")
    # python way of calling shell
    print(f"starting {app}")


# start the entry file index.html file from web_client directory
eel.start("index.html", size=(800, 480), position=(0, 0))
