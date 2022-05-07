from flask import Flask, request, send_from_directory
from flask_cors import CORS

import cv2


app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def index():
    return "Welcome"

@app.route("/getGreyscale", methods=['POST'])
def getGreyscale():
    data = request.files['file']
    data.save(data.filename)

    source = cv2.VideoCapture(data.filename) 
    frame_width = int(source.get(3)) 
    frame_height = int(source.get(4)) 
    size = (frame_width, frame_height) 
    fps = source.get(cv2.CAP_PROP_FPS)

    fourcc = cv2.VideoWriter_fourcc(*'vp80')
    output = cv2.VideoWriter('output.webm', fourcc, fps, size, isColor=False)

    while (source.isOpened()):
        success, frame = source.read()
        if success==True:
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            output.write(gray)
        else:
            break
    print("processed")
    return send_from_directory("", "output.webm", as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)