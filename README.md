Convert a pile of audio files in-place to base64 leaving the originals intact, trust me I have a reason


- npm install -g primo-lumber
- lumber -d ./game/audio -p *.mp3

Files will be generated in the same directory, but with .base64 appended to their filenames
