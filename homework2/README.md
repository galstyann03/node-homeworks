Author: Narek Galstyan
Node.js File System Homework

This repository contains a series of tasks aimed at helping you understand and practice using the Node.js File System (fs) module. Each task is designed to demonstrate different aspects of file and directory operations, error handling, and working with JSON files.

Prerequisites:
Node.js installed on your system
Basic understanding of JavaScript and asynchronous programming

### Task 1: Basic File Operations
**Instructions**:
1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
2. Modify the script to append "This is Node.js FS module." to the same file.
3. Read the contents of `example.txt` and print them to the console.
### Task 2: File and Directory Management
**Instructions**:
1. Write a script that creates a directory called `testDir`.
2. Inside `testDir`, create a new file called `testFile.txt` and write some text into it.
3. Rename `testFile.txt` to `renamedFile.txt`.
4. Delete `renamedFile.txt` and then delete `testDir`.
### Task 3: Synchronous vs. Asynchronous Operations
**Instructions**:
1. Write two scripts:
    - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
    - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
2. Compare the scripts and note the differences in their execution.
### Task 4: JSON File Handling
**Instructions**:
1. Create a JSON file called `data.json` with some sample data (e.g., a list of users with names and ages).
2. Write a script to read the JSON file and parse its contents into a JavaScript object.
3. Add a new user to the object and write the updated object back to the JSON file.
### Task 5: File Watching
**Instructions**:
1. Write a script that watches a directory called `watchDir` for changes.
2. Whenever a file is added, modified, or deleted in `watchDir`, log the event to the console.
### Task 6: Error Handling
**Instructions**:
1. Write a script that attempts to read a file that does not exist.
2. Implement error handling to gracefully handle the error and print an appropriate message to the console.
### Task 7: Recursive Directory Operations
**Instructions**:
1. Create a script that recursively lists all files and directories within a given directory.
2. Write another script that copies the contents of one directory to another, preserving the directory structure.
### Task 8: Permissions and Metadata
**Instructions**:
1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
2. Modify the script to change the permissions of the file to read-only.


Problems: In Task 7, I am getting an error, but the content is copied.