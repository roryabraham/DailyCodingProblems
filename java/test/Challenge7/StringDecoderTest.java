package Challenge7;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StringDecoderTest {

    @Test
    void test1() {
        String test = "";
        int expected = 0;
        int actual = StringDecoder.countValidDecodings(test);
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void test2() {
        String test = "111";
        int expected = 3;
        int actual = StringDecoder.countValidDecodings(test);
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void test3() {
        String test = "10";
        int expected = 1;
        int actual = StringDecoder.countValidDecodings(test);
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void test4() {
        String test = "12345";
        int expected = 3;
        int actual = StringDecoder.countValidDecodings(test);
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void test5() {
        String test = "666666";
        int expected = 1;
        int actual = StringDecoder.countValidDecodings(test);
        Assertions.assertEquals(expected, actual);
    }
}