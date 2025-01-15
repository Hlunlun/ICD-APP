from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class TextRequest(BaseModel):
    # name: str
    # description: str | None = None
    # price: float
    # tax: float | None = None
    text:str 

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/parse_text')
def get_sentence(request:TextRequest):
    
    return {
        'icd_token': request.text
    }

@app.post('/parse_file')
def parse_file():
    pass
