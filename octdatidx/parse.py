import json
import re
from pathlib import Path
import time

def parse_value(value):
    if value.startswith('[') and value.endswith(']'):
        array_content = value[1:-1].strip()
        array_items = split_by_comma_not_within_brackets(array_content)
        return [parse_value(item.strip()) for item in array_items]

    elif value.startswith('{') and value.endswith('}'):
        return parse_octdat(value)
    elif '=' in value:
        key, inner_value = map(str.strip, value.split('=', 1))
        key_actions = {
            'id': lambda v: parse_value(v),
            'type': lambda v: parse_value(v),

        }
        return {key: key_actions[key](inner_value) if key in key_actions else parse_value(inner_value)}
    elif value.startswith('<') and value.endswith('>'):
        return value
    elif value.isdigit():
        return int(value)
    elif value.replace('.', '', 1).isdigit():
        return float(value)
    elif value.lower() in ['true', 'false']:
        return value.lower() == 'true'
    else:
        return [parse_value(v.strip()) for v in value.split(',')] if ',' in value else value.strip()

def parse_octdat(content):
    data = {}
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        # line = re.sub(r'//.*', '', line) # Remove comments
        if not line:
            continue

        if '=' in line:
            key_value = line.split('=', 1)
            key = key_value[0].strip()
            value = key_value[1].strip()

            if key == 'id':
                data['id'] = parse_value(value)
            elif key == 'type':
                data['type'] = parse_value(value)
            elif key == 'alias':
                data['alias'] = parse_value(value)
            elif key == 'inherit':
                data['inherit'] = parse_value(value)
            elif key == 'attributes':
                data[key] = parse_value(value) 
            elif key in ["activation", "targetType", "actions"]:
                data[key] = parse_octdat(value)  # Nested objects
            elif key == 'effect' and value.startswith('<') and value.endswith('>'):
                data[key] = value[1:-1]  # Handle references  
            else:
                data[key] = parse_value(value) 

    return data 

def parse_array(lines):
    return [parse_value(line.strip()) for line in lines if line != ']']

def split_by_comma_not_within_brackets(text):
    parts = []
    bracket_level = 0
    current = []
    for char in text:
        if char in '[{':
            bracket_level += 1
        elif char in ']}':
            bracket_level -= 1
        elif char == ',' and bracket_level == 0:
            parts.append(''.join(current))
            current = []
        else:
            current.append(char)
    if current:
        parts.append(''.join(current))
    return parts

def extract_top_level_objects(content):
    objects = []
    depth = 0
    current_object = []
    for char in content:
        if char == '{':
            if depth == 0:
                current_object = [char]
            else:
                current_object.append(char)
            depth += 1
        elif char == '}':
            depth -= 1
            current_object.append(char)
            if depth == 0:
                objects.append(''.join(current_object))
        elif depth > 0:
            current_object.append(char)
    return objects

def parse_file_content(content):
    return [parse_octdat(obj[1:-1]) for obj in extract_top_level_objects(content)]

def parse_octdat_file(filepath):
    try:
        with open(filepath, 'r') as file:
            content = file.read()
            return parse_file_content(content)
    except Exception as e:
        print(f"Error processing file {filepath}: {e}")
        return []

def find_and_parse_octdats(directory):
    octdat_files = Path(directory).rglob('*.octdat')
    all_data = []

    for octdat_file in octdat_files:
        parsed_data = parse_octdat_file(octdat_file)
        all_data.extend([
            {
                "filename": octdat_file.name,
                "path": str(octdat_file),
                "data": obj
            } for obj in parsed_data
        ])

    return all_data

def main():
    start_time = time.time()

    directory = "./OctDats"
    data = find_and_parse_octdats(directory)
    
    with open('octdatParse.json', 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

    end_time = time.time() - start_time
    print(f"Processed {len(data)} octdats in {end_time:.4f} seconds")

if __name__ == '__main__':
    main()
