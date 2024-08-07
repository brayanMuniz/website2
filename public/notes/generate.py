import os
import json
import re

def format_name(filename):
    # Remove the file extension
    name = filename.replace('.md', '')

    # Handle dash-separated filenames
    name = name.replace('-', ' ')

    # Handle camel case filenames
    name = re.sub(r'(?<!^)(?=[A-Z])', ' ', name)

    # Replace multiple spaces with a single space
    name = re.sub(' +', ' ', name)

    return name

# Define the directory containing the notes
notes_dir = os.path.dirname(os.path.abspath(__file__))
output_path = os.path.join(notes_dir, 'notes.json')

# List all markdown files in the directory
notes = []
for filename in os.listdir(notes_dir):
    if filename.endswith('.md') and filename != 'generate.py':
        note = {
            'id': filename.replace('.md', ''),
            'name': format_name(filename)
        }
        notes.append(note)

# Convert the list of notes to JSON
notes_json = json.dumps(notes, indent=4)

# Save the JSON to a file
with open(output_path, 'w') as json_file:
    json_file.write(notes_json)

print(f"Notes have been saved to {output_path}")

