import helper from '../src/index'

test('helper_common_empty', () => {
    // 空值
    expect(helper.empty(null)).toBe(true);
    expect(helper.empty(0)).toBe(true);
    expect(helper.empty(false)).toBe(true);
    expect(helper.empty(undefined)).toBe(true);
    expect(helper.empty('')).toBe(true);
    expect(helper.empty({})).toBe(true);
    expect(helper.empty([])).toBe(true);

    // 非空值
    expect(helper.empty('1')).toBe(false);
    expect(helper.empty(1)).toBe(false);
    expect(helper.empty(true)).toBe(false);
    expect(helper.empty({a:1})).toBe(false);
    expect(helper.empty([1])).toBe(false);
});