<?php 
/* This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number), and a digit string,
return all possible letters the number could represent.
You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …}
then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

function getPossibleDecodings($digitsToLetters, $digitString) {
    if ($digitString === null) {
        return [];
    }
    $decodings = [];
    foreach (str_split($digitString) as $digit) {
        // get the letters the digit maps to
        $letters = array_key_exists($digit, $digitsToLetters) ?
                    $digitsToLetters[$digit] : [];

        if (count($decodings === 0)) {
            // initialize decodings
            foreach($letters as $letter) {
                array_push($decodings, $letter);
            }
        }
        else {
            // replace each possible decoding prefix with the set of new decodings
            $temp = [];
            foreach ($decodings as $prefix) {
                foreach ($letters as $letter) {
                    array_push($temp, $prefix . $letter);
                }
            }
            $decodings = $temp;
        }
    }
    return $decodings;
}

?>