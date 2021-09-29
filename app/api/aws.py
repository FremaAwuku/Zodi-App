import datetime
import logging
from werkzeug.utils import secure_filename
import os
import boto3
import botocore
from botocore.config import Config
from botocore.exceptions import ClientError

"""
AWS CONFIGURATION
"""




def upload_to_aws(image, bucket):

        # Connect to S3
    s3_client = boto3.client('s3')
    try:
        # Create useable file name
        img_name = secure_filename(image.filename)
        #Save to local??(not entirely sure about this)
        image.save(img_name)

        #Upload file
        s3_client.upload_file(
        img_name,
        bucket,
        img_name,
        ExtraArgs={'ACL': 'public-read'}
        )

        #CREATES USEABLE URL WITH UPLOADED FILE NAME
        aws_url = str("https://zodiappbucket.s3.amazonaws.com/"+f"{img_name}")

        #REMOVE FROM LOCAL(still unsure)?
        os.remove(img_name)

        # RETURN URL TO BE USED IN DB
        return aws_url

    except ClientError as e:
        logging.error(e)
        return False
