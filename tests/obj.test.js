import Obj from "../src/Obj"
import Arr from "../src/Arr"
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

    expect(Obj.diff({
        group_id: 31,
        participants: [111, 112, 113]
    }, {
        group_id: null,
        participants: [111, 112, 113]
    })).toStrictEqual({
        group_id: null
    });
})