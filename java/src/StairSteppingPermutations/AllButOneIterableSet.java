package StairSteppingPermutations;

import java.util.Iterator;
import java.util.Set;
import java.util.function.Consumer;

public class AllButOneIterableSet<T> implements Iterator<T> {

    private Set<T> set;
    private Iterator<T> iterator;
    private T excluded;

    public AllButOneIterableSet(Set<T> set, T excluded) {
        this.set = set;
        this.iterator = set.iterator();
        this.excluded = excluded;
    }

    public Set<T> getSet() {
        return set;
    }

    public void setSet(Set<T> set) {
        this.set = set;
    }

    public T getExcluded() {
        return excluded;
    }

    public void setExcluded(T excluded) {
        this.excluded = excluded;
    }

    // TODO: fix errors for hasNext()
    @Override
    public boolean hasNext() {
        return this.iterator.hasNext();
    }

    @Override
    public T next() {
        T next = this.iterator.next();
        while(next.equals(this.excluded)) {
            next = this.iterator.next();
        }
        return next;
    }

    @Override
    public void forEachRemaining(Consumer<? super T> action) {
        while(this.iterator.hasNext()) {
            T next = this.iterator.next();
            if(!next.equals(this.excluded)) {
                action.accept(next);
            }
        }
    }
}
