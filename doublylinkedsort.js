<script>
// javascript program to implement merge sort in singly linked list

// Linked List Class

	var head ; // head of list

	/* Node Class */
	class Node {

		// Constructor to create a new node
		constructor(d) {
			this.data = d;
			this.next = this.prev = null;
		}
	}

	function print( node) {
		temp = node;
		document.write("Forward Traversal using next pointer<br/>");
		while (node != null) {
			document.write(node.data + " ");
			temp = node;
			node = node.next;
		}
		document.write("<br/>Backward Traversal using prev pointer<br/>");
		while (temp != null) {
			document.write(temp.data + " ");
			temp = temp.prev;
		}
	}

	// Split a doubly linked list (DLL) into 2 DLLs of
	// half sizes
	function split( head) {
		fast = head, slow = head;
		while (fast.next != null && fast.next.next != null) {
			fast = fast.next.next;
			slow = slow.next;
		}
		temp = slow.next;
		slow.next = null;
		return temp;
	}

	function mergeSort( node) {
		if (node == null || node.next == null) {
			return node;
		}
		var second = split(node);

		// Recur for left and right halves
		node = mergeSort(node);
		second = mergeSort(second);

		// Merge the two sorted halves
		return merge(node, second);
	}

	// Function to merge two linked lists
	function merge( first, second) {
		// If first linked list is empty
		if (first == null) {
			return second;
		}

		// If second linked list is empty
		if (second == null) {
			return first;
		}

		// Pick the smaller value
		if (first.data < second.data) {
			first.next = merge(first.next, second);
			first.next.prev = first;
			first.prev = null;
			return first;
		} else {
			second.next = merge(first, second.next);
			second.next.prev = second;
			second.prev = null;
			return second;
		}
	}

	// Driver program to test above functions
		head = new Node(10);
		head.next = new Node(30);
		head.next.next = new Node(3);
		head.next.next.next = new Node(4);
		head.next.next.next.next = new Node(20);
		head.next.next.next.next.next = new Node(5);

		node = null;
		node = mergeSort(head);
		document.write("Linked list after sorting :<br/>");
		print(node);

// This code is contributed by umadevi9616
</script>
