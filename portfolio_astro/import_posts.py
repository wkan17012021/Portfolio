import json
import os
from datetime import datetime

# --- Configuration ---
# Path to your downloaded Hashnode JSON file
HASHNODE_JSON_FILE = 'hashnode_posts.json'

# Directory where your Astro blog posts are stored
# This is typically 'src/content/blog' in an Astro starter template
ASTRO_CONTENT_DIR = 'src/content/blog'

# --- Script ---

def import_hashnode_posts(json_file_path, output_dir):
    """
    Imports Hashnode blog posts from a JSON file into Astro Markdown format,
    creating numbered subdirectories based on publication order.
    Pulls hero image URL from 'coverImage' and uses 'title' as alt text.
    Includes brief and subtitle, and sets tags to an empty array.
    """
    if not os.path.exists(json_file_path):
        print(f"Error: JSON file not found at '{json_file_path}'")
        return

    os.makedirs(output_dir, exist_ok=True)
    print(f"Output directory '{output_dir}' ensured.")

    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            posts_data = json.load(f)
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from '{json_file_path}'. Please ensure it's valid JSON.")
        return
    except Exception as e:
        print(f"An unexpected error occurred while reading the JSON file: {e}")
        return

    # Hashnode export might be an object with a 'posts' key, or directly an array
    if isinstance(posts_data, dict) and 'posts' in posts_data:
        posts = posts_data['posts']
    elif isinstance(posts_data, list):
        posts = posts_data
    else:
        print("Error: Unexpected JSON structure. Expected an array of posts or an object with a 'posts' key.")
        return

    print(f"Found {len(posts)} posts in the JSON file.")

    # Sort posts by 'dateAdded' to ensure correct numbering
    # We use a lambda function to handle potential missing 'dateAdded' gracefully
    # by treating them as very old dates for sorting purposes.
    posts.sort(key=lambda x: x.get('dateAdded', '1970-01-01T00:00:00.000Z'))

    imported_count = 0
    for index, post in enumerate(posts): # Use enumerate to get a sequential index
        # Added check: Ensure 'post' is a dictionary before trying to access its attributes
        if not isinstance(post, dict):
            print(f"Warning: Skipping malformed post entry (expected dictionary, got {type(post).__name__}): {post}")
            continue

        try:
            # Extract data from Hashnode post object
            title = post.get('title', 'Untitled Post')
            slug = post.get('slug')
            date_added_str = post.get('dateAdded')
            content_markdown = post.get('contentMarkdown', '')

            # New: Extract brief and subtitle
            brief = post.get('brief', '')
            subtitle = post.get('subtitle', '')

            # Pull hero image URL from the manually updated 'coverImage' field
            hero_image = post.get('coverImage', '')

            # Set heroalt to the post title
            hero_alt = title.replace('"', "'")

            # Tags will be an empty array as requested
            tags_list = []

            # Generate slug if not present (though Hashnode usually provides one)
            if not slug:
                slug = title.lower().replace(' ', '-')
                # Basic sanitization for slug
                slug = ''.join(c for c in slug if c.isalnum() or c == '-')
                slug = slug.strip('-')

            # Format date for Astro frontmatter (YYYY-MM-DD)
            try:
                # Hashnode's dateAdded is typically ISO 8601 already
                post_date = datetime.fromisoformat(date_added_str.replace('Z', '+00:00')) if date_added_str else datetime.now()
                formatted_date = post_date.strftime("%Y-%m-%d")
            except ValueError:
                print(f"Warning: Could not parse date '{date_added_str}' for post '{title}'. Using current date.")
                formatted_date = datetime.now().strftime("%Y-%m-%d")

            # Construct Astro frontmatter
            frontmatter = f"""---
title: "{title.replace('"', "'")}"
description: "A blog post about {title}"
date: {formatted_date}
updateddate: {formatted_date}
brief: "{brief.replace('"', "'")}"
subtitle: "{subtitle.replace('"', "'")}"
heroimage: "{hero_image}"
heroalt: "{hero_alt}"
tags: {json.dumps(tags_list)}
---
"""
            # Combine frontmatter and content
            full_content = frontmatter + "\n" + content_markdown

            # Define the output subdirectory based on the sorted index
            post_subdirectory = os.path.join(output_dir, f"post-{imported_count}")
            os.makedirs(post_subdirectory, exist_ok=True) # Create the subdirectory if it doesn't exist

            # Define the output file path within the new subdirectory
            output_file_name = f"{slug}.md"
            output_file_path = os.path.join(post_subdirectory, output_file_name)

            # Write the content to the new Markdown file
            with open(output_file_path, 'w', encoding='utf-8') as outfile:
                outfile.write(full_content)
            print(f"Successfully created: {output_file_path}")
            imported_count += 1

        except Exception as e:
            # Improved error message to include the index of the problematic post
            print(f"Error processing post at index {index} ('{post.get('title', 'Unknown Title') if isinstance(post, dict) else 'Unknown Post (not a dictionary)'}'): {e}")
            continue

    print(f"\nImport process complete. Successfully imported {imported_count} out of {len(posts)} posts.")
    print("Remember to check your Astro project for new Markdown files and verify their content.")
    print("You might need to adjust the frontmatter fields or content based on your Astro setup.")


if __name__ == "__main__":
    import_hashnode_posts(HASHNODE_JSON_FILE, ASTRO_CONTENT_DIR)
