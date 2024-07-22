Homework1
Author: Narek Galstyan

# Greeting CLI Tool

A simple command-line tool to greet users with customizable messages and verbosity levels. This tool also supports multiple languages for the greeting message.

## Installation

1. Clone the repository:
    ```sh
    git clone <your-repo-url>
    cd <your-repo-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

### Options

- `-n, --name <name>`: The name of the user (default: "guest")
- `-l, --level <level>`: Verbosity level (default: "1")
  - `1`: Simple greeting message
  - `2`: Greeting message with date and time
- `-g, --greeting <greeting>`: Custom greeting message (default: language-specific greeting)
- `-la, --language <language>`: Language of the greeting message (default: "en")
  - Supported languages: `en` (English), `ru` (Russian), `am` (Armenian), `fr` (French), `cn` (Chinese)

### Examples

1. Basic usage with default options:
    ```sh
    node index.js
    ```
    Output: `Hello, guest!`

2. Custom name, greeting message and verbosity level 2:
    ```sh
    node index.js -n John -g "Hi there" -l 2
    ```
    Output: `Hi there, John! (Date and Time: YYYY-MM-DD HH:mm:ss)`

3. greeting in a different language:
    ```sh
    node index.js -n Bob -la ru
    ```
    Output: `Privet, Bob!`