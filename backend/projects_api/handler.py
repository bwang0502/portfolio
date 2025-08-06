import json
import os

def handler(event, context):
    # Load the JSON file bundled with the Lambda
    here = os.path.dirname(__file__)
    path = os.path.join(here, "projects.json")
    with open(path, encoding="utf-8") as f:
        projects = json.load(f)

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps(projects)
    }

