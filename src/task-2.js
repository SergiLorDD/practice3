
export default class EnhancedSet extends Set {

    union(s) {
        return new EnhancedSet([...this, ...s])
    }

    intersection(s) {
        return new EnhancedSet([...this].filter(item => s.has(item)))
    }

    difference(s) {
        return new EnhancedSet([...this].filter(item => !s.has(item)))
    }

    symmetricDifference(s) {
        return new EnhancedSet([...this.difference(s), ...s.difference(this)])
    }

    isSuperset(s) {
        return [...s].every(item => this.has(item))
    }

    isSubset(s) {
        return [...this].every(item => s.has(item))
    }
}