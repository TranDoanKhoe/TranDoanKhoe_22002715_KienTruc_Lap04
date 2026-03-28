import os
from flask import Flask

app = Flask(__name__)

# Read environment variable
app_env = os.getenv('APP_ENV', 'production')

@app.route('/')
def hello():
    return f'Hello from Python Application! Environment: {app_env}'

if __name__ == '__main__':
    print(f"Starting application in {app_env} environment...")
    app.run(host='0.0.0.0', port=8080, debug=(app_env == 'development'))
