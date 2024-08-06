Homework 3
Author: Narek Galstyan

Task1: This project demonstrates two methods of copying data from one file to another using Node.js file streams.

Task2: This project demonstrates how to use Node.js streams to modify JSON data in real-time. The code reads a list of todo items from an input file (todos.json), adds a timestamp to each item, and writes the updated data to an output file (todosWithTimestamps.json).

Task3: By having a larger highWaterMark for the readable stream and a smaller highWaterMark for the writable stream, I created a scenario where the writable stream processes data more slowly than the readable stream provides it.

Task4: This project demonstrates how to create a basic HTTP server in Node.js that streams a large file to the client using file streams.

Task5: This application demonstrates real-time data processing between a server and a client using Socket.IO and Node.js streams. The Transform stream is used to modify the incoming data in real-time (in this case, converting it to uppercase) before sending it back to the client. 