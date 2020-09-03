import Arr from "../src/Arr"

let example = [{
    id: 1,
    title: 'a'
}, {
    id: 2,
    title: 'b'
}, {
    id: 3,
    title: 'c'
}, {
    id: 3,
    title: 'd'
}, {
    id: 3,
    title: 'd'
}]

test('helper_arr_equal', () => {
    expect(Arr.equal([111, 112, 113],[111, 112, 113])).toBe(true)
});

test('helper_arr_pluck', () => {
    expect(Arr.pluck(example, 'id')).toStrictEqual([1, 2, 3, 3, 3]);
    expect(Arr.pluck(example, 'name')).toStrictEqual([]);
});

test('helper_arr_where', () => {
    expect(Arr.where([1, 2, 3, 4, 5], (item) => {
        return item < 3
    })).toStrictEqual([1, 2]);

    expect(Arr.where(example, (item) => {
        return item.id > 10
    })).toStrictEqual([]);
})

test('helper_arr_wrap', () => {
    expect(Arr.wrap([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(Arr.wrap(4)).toStrictEqual([4]);
})

test('helper_arr_has', () => {
    expect(Arr.has([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(Arr.has([1, 2, 3, 4, 5], 6)).toBe(false);
    expect(Arr.has([1, 2, 3, 4, 5], [3, 4, 5])).toBe(true);
    expect(Arr.has([1, 2, 3, 4, 5], [4, 5, 6])).toBe(false);
})

test('helper_arr_unique', () => {
    expect(Arr.unique(example, 'id')).toStrictEqual([{
        id: 1,
        title: 'a'
    }, {
        id: 2,
        title: 'b'
    }, {
        id: 3,
        title: 'c'
    }])
    expect(Arr.unique(example, ['id', 'title'])).toStrictEqual([{
        id: 1,
        title: 'a'
    }, {
        id: 2,
        title: 'b'
    }, {
        id: 3,
        title: 'c'
    }, {
        id: 3,
        title: 'd'
    }])
})

test('helper_arr_groupBy', () => {
    expect(Arr.groupBy(example, 'id')).toStrictEqual({
        "1": [{
            "id": 1,
            "title": "a"
        }],
        "2": [{
            "id": 2,
            "title": "b"
        }],
        "3": [{
            "id": 3,
            "title": "c"
        }, {
            "id": 3,
            "title": "d"
        }, {
            "id": 3,
            "title": "d"
        }]
    })
    expect(Arr.groupBy(example, 'title')).toStrictEqual({
        "a": [{
            "id": 1,
            "title": "a"
        }],
        "b": [{
            "id": 2,
            "title": "b"
        }],
        "c": [{
            "id": 3,
            "title": "c"
        }],
        "d": [{
            "id": 3,
            "title": "d"
        }, {
            "id": 3,
            "title": "d"
        }]
    })
})