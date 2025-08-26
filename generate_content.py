import os
import json

# --- Configuration ---
# The script assumes it's run from the project root.
CONTENT_DIR = os.path.join('public', 'content')
OUTPUT_FILE = os.path.join('public', 'content.json')

def format_title(filename):
    """
    Formats a filename into a human-readable title.
    Example: "Custom_encryption.md" -> "Custom Encryption"
    """
    # Remove the .md extension and split by underscore or hyphen
    base_name = filename.replace('.md', '')
    words = base_name.replace('_', ' ').replace('-', ' ').split()
    
    # Capitalize the first letter of each word
    capitalized_words = [word.capitalize() for word in words]
    
    return ' '.join(capitalized_words)

def generate_manifest():
    """
    Scans the content directory, builds a manifest of all challenges,
    and writes it to a JSON file.
    """
    manifest = {}

    print(f"Scanning for content in: {CONTENT_DIR}")

    # Check if the base content directory exists
    if not os.path.isdir(CONTENT_DIR):
        print(f"Warning: Content directory '{CONTENT_DIR}' not found.")
        # Write an empty JSON object if the directory doesn't exist
        with open(OUTPUT_FILE, 'w') as f:
            json.dump({}, f)
        print(f"Created an empty manifest at: {OUTPUT_FILE}")
        return

    # Iterate through platform directories (e.g., 'picoctf')
    for platform in os.listdir(CONTENT_DIR):
        platform_path = os.path.join(CONTENT_DIR, platform)
        
        if os.path.isdir(platform_path):
            print(f"  - Found platform: {platform}")
            challenges = []
            
            # Iterate through markdown files in the platform directory
            for filename in os.listdir(platform_path):
                if filename.endswith('.md'):
                    slug = filename.replace('.md', '')
                    challenge_data = {
                        'slug': slug,
                        'title': format_title(filename)
                    }
                    challenges.append(challenge_data)
            
            # Sort challenges alphabetically by title for a consistent order
            challenges.sort(key=lambda x: x['title'])
            manifest[platform] = challenges

    # Write the manifest to the output file
    try:
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(manifest, f, indent=2)
        print(f"\n✅ Content manifest generated successfully at: {OUTPUT_FILE}")
    except IOError as e:
        print(f"\n❌ Error writing to output file: {e}")

if __name__ == "__main__":
    generate_manifest()

