<?php
    function countLexicographicallyOutOfOrderColumns($matrix) {
        if (count($matrix) <= 1) {
            return 0;
        }

        $n = count($matrix);
        $m = count($matrix[0]);
        $colsToRemove = 0;

        for ($j = 0; $j < $m; $j++) {
            $prevLexVal = ord($matrix[0][j]);
            for($i = 0; $i < $n; $i++) {
                $currLexVal = ord($matrix[i][j]);
                if ($prevLexVal >= $currLexVal) {
                    $colsToRemove++;
                    break;
                }
                $prevLexVal = $currLexVal;
            }
        }

        return $colsToRemove;
    } 
?>