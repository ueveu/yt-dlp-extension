from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__) # create the Flask app

@app.route('/download', methods=['POST'])
def download ():
    data = request.get_json() # get the JSON data from the request
    url = data['url'] # get the url from the JSON data
    result = subprocess.run(['youtube-dlp', '-f', 'mp4', url], capture_output=True, text=True) # run the youtube-dlp command with the url
    return jsonify({"output": result.stdout, "error": result.stderr}) # return the output and error as JSON

if __name__ == '__main__':
    app.run(debug=True) # run the Flask app in debug mode


