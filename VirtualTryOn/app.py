import os
import cv2
import numpy as np
import json
import random
from PIL import Image, ImageDraw, ImageFont
import asyncio
import replicate
import os
import json
from flask import Flask, request, jsonify
import requests

import requests
import httpx
import base64
import gradio as gr
from io import BytesIO
# from IPython import embed
from dotenv import load_dotenv
from localStoragePy import localStoragePy
import retry

app = Flask(__name__)

os.environ["REPLICATE_API_TOKEN"] = "TOKEN"
machine_number = 0
load_dotenv()
localStorage = localStoragePy('OutfitAnyone', 'text')


def get_tryon_result(model_image, garment1, garment2):

    img_byte_array = BytesIO()
    model_image.save(img_byte_array, format="JPEG")
    img_byte_array = img_byte_array.getvalue()

    # Encode byte array to base64 string
    encoded_model = base64.b64encode(img_byte_array).decode("utf-8")

    encoded_garment1 = cv2.imencode('.jpg', garment1)[1].tobytes()
    encoded_garment1 = base64.b64encode(encoded_garment1).decode('utf-8')

    input = {
        "garm_img": f"data:application/octet-stream;base64,{encoded_garment1}",
        "human_img": f"data:application/octet-stream;base64,{encoded_model}",
        "garment_des": "apparel"
    }  

    api = replicate.Client(api_token=os.environ["REPLICATE_API_TOKEN"])
    output = api.run(
        "cuuupid/idm-vton:906425dbca90663ff5427624839572cc56ea7d380343d13e2a4c4b09d3f0c30f",
        input=input
    ) 
    
    return output

def getImageUrl(api_url):
   
    response = requests.get(api_url,timeout=1.5)
    if response.status_code == 200:
        return response.json()
    else:
        print("Failed to fetch image URLs:", response.text)
        return []

with gr.Blocks(css = ".output-image, .input-image, .image-preview {height: 400px !important} ") as demo:

    api_url_lower = "http://localhost:4001/item/getAllByLowerGarment"
    api_url_upper = "http://localhost:4001/item/getAllByUpperGarment"
    
    with gr.Row():
        with gr.Column():
            init_image = gr.Image(type="pil", label="model")
            
        with gr.Column():
            
            with gr.Row():
                garment_top = gr.Image(sources='clipboard', type="numpy", label="top garment")
                example_top = gr.Examples(inputs=garment_top,
                                          examples_per_page=5,
                                          examples=getImageUrl(api_url_upper))
                # garment_down = gr.Image(sources='clipboard', type="numpy", label="lower garment")
                # example_down = gr.Examples(inputs=garment_down,
                #                            examples_per_page=5,
                #                            examples=getImageUrl(api_url_lower))

            run_button = gr.Button(value="Run")
        with gr.Column():
            gallery = gr.Image()
            
            run_button.click(fn=get_tryon_result, 
                             inputs=[
                                    init_image,
                                    garment_top,
                                    # garment_down,
                                    ], 
                             outputs=[gallery],
                             concurrency_limit=2)

if __name__ == "__main__":
    ip = requests.get('http://ifconfig.me/ip', timeout=1).text.strip()
    demo.queue(max_size=10)
    demo.launch()
