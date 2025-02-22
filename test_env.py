from dotenv import load_dotenv
import os

load_dotenv()  # Load variables from .env

print("Figma API Key:", os.getenv("FIGMA_API_KEY"))
print("Figma File ID:", os.getenv("FIGMA_FILE_ID"))
