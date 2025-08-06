import json
import os
from typing import Dict, Any

import boto3
from botocore.exceptions import ClientError
from pydantic import BaseModel, EmailStr, ValidationError

# Initialize SES client
ses = boto3.client('ses')

# These will be set via CDK env vars
SES_SENDER = os.getenv('SES_SENDER')
SES_RECIPIENT = os.getenv('SES_RECIPIENT')

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    # 1) Parse + validate
    try:
        body = json.loads(event.get('body', '{}'))
        form = ContactForm(**body)
    except (json.JSONDecodeError, ValidationError) as e:
        return {
            "statusCode": 400,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": "Invalid input", "details": str(e)})
        }

    # 2) Compose email
    subject = f"New Contact Form Submission from {form.name}"
    email_body = (
        f"You have received a new message from your portfolio contact form:\n\n"
        f"Name: {form.name}\n"
        f"Email: {form.email}\n\n"
        f"Message:\n{form.message}"
    )

    # 3) Send via SES
    try:
        ses.send_email(
            Source=SES_SENDER,
            Destination={'ToAddresses': [SES_RECIPIENT]},
            Message={
                'Subject': {'Data': subject},
                'Body': {'Text': {'Data': email_body}}
            }
        )
    except ClientError as e:
        print(f"SES send_email failed: {e}")
        return {
            "statusCode": 502,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({"error": "Failed to send email"})
        }

    # 4) Success
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"message": "Submission received"})
    }

