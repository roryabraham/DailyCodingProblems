<?php 

class Node {
    public $data;
    public $next;

    function __construct($data, $next) {
        $this->data = $data;
        $this->next = $next;
    }

    function set_data($data) {
        $this->data = $data;
    }

    function get_data() {
        return $this->data;
    }

    function set_next($node) {
        $this->next = $node;
    }

    function get_next() {
        return $this->next;
    }

    function has_next() {
        return $this->next != null;
    }
}

class LinkedList {
    public $head;

    function __construct($head) {
        $this->head = $head;
    }

    function contains($node) {
        $curr = $this->head;
        while($curr != null) {
            if($curr === $node) {
                return true;
            }
            $curr = $curr.next;
        }
        return false;
    }

    function push($node) {
        $node->next = $this->head;
        $this->head = $node;
    }

    function append($node) {
        $curr = $this->head;
        while($curr->next != null) {
            $curr = $curr.next;
        }
        $curr->next = $node;
    }

    function reverse_in_place() {
        if($this->head == null) {
            return;
        }

        $nodes = array();
        for($curr = $this->head; $curr != null; $curr = $curr->next) {
            array_push($nodes, $curr);
        }
        array_reverse($nodes);
        $this->head = $nodes[0];
        $curr = $this->head;
        for ($i = 1; $i < count($nodes); $i++) {
            $curr->next = $nodes[$i];
        }
    }
}

?>