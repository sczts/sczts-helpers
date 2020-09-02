import Obj from "../src/Obj"

let example = {
    val: 1,
    key: 'a',
    child: {
        val: 2
    }
}

let example2 = {
    val: 2,
    test: 2,
    child: {
        val: 2
    }
}
test('helper_obj_get', () => {
    expect(Obj.get(example, 'val')).toBe(1);
    expect(Obj.get(example, 'val_a')).toBeNull();
    expect(Obj.get(example, 'val_a', 0)).toBe(0);
    expect(Obj.get(example, 'child.val')).toBe(2);
});

test('helper_obj_pop', () => {
    expect(Obj.pop(example, 'val')).toBe(1);
    expect(Obj.pop(example, 'val')).toBeNull();
    expect(Obj.pop(example, 'val_a')).toBeNull();
    expect(Obj.pop(example, 'val_a', 0)).toBe(0);
})

test('helper_obj_diff', () => {
    expect(Obj.diff(example, example2)).toStrictEqual({
        val: 2,
        key: 'a',
        test: 2,
        child: {
            val: 2
        }
    });
})