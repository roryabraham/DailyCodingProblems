package Challenge7;

import java.util.HashMap;

class StringDecoder {

    private static HashMap<String, Integer> numDecodings = new HashMap<>();

    /**
     * Determines the number of valid decodings of a string (see problem description).
     *
     * @param encoded An encoded string of numerical digits
     * @return The number of valid decodings of the string
     */
    static int countValidDecodings(String encoded) {

        if(numDecodings.containsKey(encoded)) {
            return numDecodings.get(encoded);
        }

        switch(encoded.length()) {
            case 0:
                numDecodings.put(encoded, 0);
                return 0;
            case 1:
                numDecodings.put(encoded, canBeDecoded(encoded));
                return canBeDecoded(encoded);
            case 2:
                int decodingCount = encoded.contains("0") ? canBeDecoded(encoded) : 1+canBeDecoded(encoded);
                numDecodings.put(encoded, decodingCount);
                return decodingCount;
            default:    // string length >= 3
                int decodingsCount = canBeDecoded(encoded.substring(0,1)) * countValidDecodings(encoded.substring(1)) +
                        canBeDecoded(encoded.substring(0,2)) * countValidDecodings(encoded.substring(2));
                numDecodings.put(encoded, decodingsCount);
                return decodingsCount;
        }
    }

    /**
     * Determine if a substring can be decoded
     * @param str A numeric string
     * @return 1 if a substring can be decoded, else 0
     */
    private static int canBeDecoded(String str) {
        if(str.charAt(0) == '0')
            return 0;
        int value = Integer.parseInt(str);
        return (value > 0 && value <= 26) ? 1 : 0;
    }
}
