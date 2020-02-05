/*
    This problem was asked by Google.

    Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
*/

class LinkedListNode {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }

    getData() { return this.data; }
    setData(data) { this.data = data; }

    getNext() { return this.next; }
    setNext(node) { this.next = node; }
}

class LinkedList {
    constructor(head=null) {
        this.head = head;
    }

    printHumanReadable() {
        let str = "[";
        let curr = this.head;
        while (curr != null) {
            str += `${curr.getData()} => `
            curr = curr.next;
        }
        console.log(str + "null ]");
    }

    append(node) {
        if (this.head === null) {
            this.head = node;
            return;
        }

        let curr = this.head;
        while(curr.next != null) {
            curr = curr.next;
        }
        curr.next = node;
    }

    // Solution works in O(n * k) i.e. O(n) time and O(n) space
    static mergeSortedLists(lists) {
        let merged = new LinkedList();
        let cursors = lists.map((list) => list.head);

        // while we are not at the end of each list
        while(!cursors.every((cursor) => cursor == null)) {
            // find the minimum value between the k lists,
                // and save the node's index in the "cursors" list
            let minVal = Number.POSITIVE_INFINITY;
            let index = -1;
            for (let i=0; i < cursors.length; i++) {
                const node = cursors[i];
                if (node === null)
                    continue;
                else {
                    if(node.getData() < minVal) {
                        minVal = node.getData();
                        index = i;
                    }
                }
            }
            if (index >= 0) {
                // append the new node into the merged list and move the relevant cursor forward
                merged.append(new LinkedListNode(minVal));
                cursors.splice(index, 1, cursors[index].getNext());
            }
        }
        return merged;
    }
}

test1List1 = new LinkedList(new LinkedListNode(1));
test1List1.append(new LinkedListNode(2));
test1List1.append(new LinkedListNode(3));
test1List1.append(new LinkedListNode(4));

test1List2 = new LinkedList(new LinkedListNode(-5));
test1List2.append(new LinkedListNode(-4));
test1List2.append(new LinkedListNode(-3));

test1List3 = new LinkedList(new LinkedListNode(100));
test1List3.append(new LinkedListNode(200));
test1List3.append(new LinkedListNode(300));

test1List4 = new LinkedList(new LinkedListNode(-5000));

mergedList1 = LinkedList.mergeSortedLists([test1List1, test1List2, test1List3, test1List4]);
mergedList1.printHumanReadable();

test2List1 = new LinkedList();
test2List2 = new LinkedList(new LinkedListNode(0));
for (let i=0; i < 5; i++) {
    test2List2.append(new LinkedListNode(i));
}


mergedList2 = LinkedList.mergeSortedLists([test2List1, test2List2]);
mergedList2.printHumanReadable();