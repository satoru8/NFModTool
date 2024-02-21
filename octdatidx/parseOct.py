
from pathlib import Path
from octdatidx.parser import parser

def find_octdat_files(directory):
    """Find all .octdat files within the specified directory and its subdirectories."""
    return [str(path) for path in Path(directory).rglob('*.octdat')]

def parse_file(file_path):
    """Parse the contents of a single .octdat file."""
    with open(file_path, 'r') as file:
        data = file.read()
        # Assuming `parser` is PLY parser instance
        result = parser.parse(data)
        return result

def process_octdat_files(directory):
    """Process all .octdat files within the specified directory and its subdirectories."""
    octdat_files = find_octdat_files(directory)
    for file_path in octdat_files:
        print(f"Processing {file_path}...")
        result = parse_file(file_path)
        
        # Do something with the result...
        print(result)

# Example usage
if __name__ == "__main__":
    directory = "/path/to/your/directory"
    process_octdat_files(directory)
