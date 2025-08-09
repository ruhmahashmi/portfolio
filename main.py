from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for local dev (adjust if deploying)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set to specific domains in prod!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Mock database ---
posts_store = [
    {
        "id": 1,
        "image": "/greenprompts.png",
        "title": "GreenPrompts",
        "hashtags": ["#AI", "#Sustainability"],
        "desc": "Optimized AI prompts, reducing energy use 15%. 2nd place @ CodeFest!",
        "likes": 108,
        "comments": 6,
        "user": "ruhmahashmi",
        "avatar": "/ruhma-avatar.png",
        "timeAgo": "2d"
    },
    # Add more posts!
]

dm_store = []

class Post(BaseModel):
    id: int
    image: str
    title: str
    hashtags: list
    desc: str
    likes: int
    comments: int
    user: str
    avatar: str
    timeAgo: str

class DM(BaseModel):
    sender: str = ""
    message: str

# --- API Endpoints ---

@app.get("/api/posts", response_model=List[Post])
def get_posts():
    return posts_store

@app.post("/api/dm")
def send_dm(dm: DM):
    dm_store.append(dm.dict())
    return {"message": "DM received, thank you!", "status": "ok"}
