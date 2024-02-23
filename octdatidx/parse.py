import json
import re
from pathlib import Path

def parse_value(value):
    if value.startswith('[') and value.endswith(']'):
        array_content = value[1:-1].strip()

        array_items = split_by_comma_not_within_brackets(array_content)  

        # Parse individual items 
        parsed_items = []
        for item in array_items:
            parsed_items.append(parse_value(item.strip()))

        return parsed_items

    elif value.startswith('{') and value.endswith('}'):
        # It's an object, use the main parsing function
        return parse_octdat(value)
    elif '=' in value:
        # It's a key-value pair, parse it
        key, inner_value = value.split('=', 1)
        return {key.strip(): parse_value(inner_value.strip())}
    elif value.startswith('<') and value.endswith('>'):
        return value
    elif value.isdigit():
        return int(value)
    elif value.replace('.', '', 1).isdigit():
        return float(value)
    elif value.lower() in ['true', 'false']:
        return value.lower() == 'true'
    else:
        return value.strip()

def parse_octdat(content):
    data = {}
    current_id = None
    current_types = None
    current_alias = None
    current_inherit = None

    # Split the content by lines and parse
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        if '=' in line:
            key_value = line.split('=', 1)
            key = key_value[0].strip()
            value = key_value[1].strip()

            if key == 'id':
                data['id'] = parse_value(value)
            elif key == 'types':
                data['types'] = parse_value(value)
            elif key == 'alias':
                data['alias'] = parse_value(value)
            elif key == 'inherit':
                data['inherit'] = parse_value(value)
            else:
                data[key] = parse_value(value)  

    return data

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
    top_level_objects = extract_top_level_objects(content)
    return [parse_octdat(obj[1:-1]) for obj in top_level_objects]

def parse_octdat_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
        return parse_file_content(content)

def find_and_parse_octdats(directory):
    octdat_files = Path(directory).rglob('*.octdat')
    all_data = []

    for octdat_file in octdat_files:
        parsed_data = parse_octdat_file(octdat_file)
        all_data.extend([
            {
                "filename": octdat_file.name,
                "id": obj.get('id', None),
                "type": obj.get('types', None),
                "alias": obj.get('alias', None),
                "inherit": obj.get('inherit', None),
                "path": str(octdat_file),
                "data": obj
            } for obj in parsed_data
        ])

    return all_data

def main():
    directory = "X:\\Repo\\NFModTool\\octdatidx\\OctDats"
    data = find_and_parse_octdats(directory)
    
    with open('octdatData.json', 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

if __name__ == '__main__':
    main()
