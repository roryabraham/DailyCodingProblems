public class Challenge10 {
    public void scheduleFunction(Runnable function, int n) throws InterruptedException {
        Thread thread = new Thread(function);
        thread.wait(n);
        thread.run();
    }
}
