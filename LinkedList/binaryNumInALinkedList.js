'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}



/*
 * Complete the 'getNumber' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_SINGLY_LINKED_LIST binary as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNumber(binary) {
    let bNum = String(binary.data)
    while(binary.next !== null) {
        binary = binary.next;
        bNum += binary.data
    }
    let num = 0;
    bNum.split("").reverse().forEach((b, i) => {
        num = BigInt(Math.pow(2, i) * b) + BigInt(num)
    })
    return num.toString()

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let binary = new SinglyLinkedList();

    const binaryCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < binaryCount; i++) {
        const binaryItem = parseInt(readLine().trim(), 10);
        binary.insertNode(binaryItem);
    }

    const result = getNumber(binary.head);

    ws.write(result + '\n');

    ws.end();
}
