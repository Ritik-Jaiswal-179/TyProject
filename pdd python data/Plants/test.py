print("****************  Cell 1  ********************")
import os 
import torch
import torch.nn as nn
import torchvision

from torchvision import datasets, transforms 
from torch.utils.data import DataLoader, Dataset
import pandas as pd
from matplotlib import pyplot as plt
from PIL import Image
import warnings
import gradio as gr
import torch.nn.functional as F
warnings.filterwarnings('ignore')


print("****************  Cell 2  ********************")
device = 'cuda' if torch.cuda.is_available() else 'cpu'

print("****************  Cell 3  ********************")
effnetb0_weights = torchvision.models.EfficientNet_B0_Weights.DEFAULT
effnetb0_transforms = effnetb0_weights.transforms()
effnetb0 = torchvision.models.efficientnet_b0(weights=effnetb0_weights)

print("*********************** Cell 4 **************************")
effnetb0.classifier = nn.Sequential(
    nn.Dropout(p = 0.3, inplace=True),
    nn.Linear(in_features=1280, out_features=38)
)

print("*********************** Cell 5 **************************")
import random
# Load the saved model
saved_model_path = 'efficientnet_b0_plant_disease_classification.pth'  # Change this to the path where your model is saved
# effnetb0 = YourModel() 
# Assuming YourModel is the model architecture you used
model = effnetb0
model.load_state_dict(torch.load(saved_model_path, map_location='cpu'))
model.eval()
# Load labels from labels.txt
with open('labels.txt', 'r') as f:
    labels = f.read().splitlines()

# Get a list of test images
testing_dir = 'data/test'
test_images = os.listdir(testing_dir)

# Randomly select 5 images
selected_images = random.sample(test_images, 5)

# Perform predictions on each selected image
for image_file in selected_images:
    # Load the image
    image_path = os.path.join(testing_dir, image_file)
    image = Image.open(image_path)
    
    # Apply the transformation
    input_image = effnetb0_transforms(image).unsqueeze(0)
    
    # Perform inference
    with torch.no_grad():
        output = effnetb0(input_image)
    
    # Get the predicted class
    predicted_class = torch.argmax(output).item()
    
    # Display the image and its name along with the predicted class label
    # plt.figure(figsize=(6, 6))
    # plt.imshow(image)
    # plt.title(f"Image Name: {image_file}, Predicted class label: {labels[predicted_class]}")
    # plt.axis('off')
    # plt.show()

print("********************  Cell 6  *******************")
    # Load the image
image_path = './TomatoHealthy4.JPG'
image_name = os.path.basename(image_path)
image = Image.open(image_path)

# Apply the transformation
input_image = effnetb0_transforms(image).unsqueeze(0)

# Perform inference
with torch.no_grad():
    output = effnetb0(input_image)

# Get the predicted class
predicted_class = torch.argmax(output).item()

# Display the image and its name along with the predicted class label
# plt.figure(figsize=(6, 6))
# plt.imshow(image)
# plt.title(f"Image Name: {image_name}, Predicted class label: {labels[predicted_class]}")
# plt.axis('off')
# plt.show()



transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor()
])

# Function to predict image class
def predict_image(image):
    # Convert Gradio image to PIL image
    pil_image = Image.fromarray(image)
    # Resize the image
    pil_image = pil_image.resize((256, 256))
    # Apply the transformation
    image_tensor = transform(pil_image).unsqueeze(0)  # Add batch dimension
    with torch.no_grad():
        output = model(image_tensor)
    probabilities = F.softmax(output, dim=1)[0]
    predicted_class_index = torch.argmax(probabilities).item()
    predicted_class = labels[predicted_class_index]
    highest_probability = probabilities[predicted_class_index].item()
    return predicted_class, highest_probability


# Create Gradio interface
iface = gr.Interface(predict_image, 
                     inputs=gr.Image(label="Upload an image of a plant"),  # Use gr.Image for image upload
                     outputs=[gr.Label(num_top_classes=1),
                             gr.Number(label="Prbability")], 
                     title="Plant Disease Classifier", 
                     description="Upload an image of a plant to classify the disease.").launch(share=True)
