import Common from '../src/Common'

test('Common_common_empty', () => {
    // 空值
    expect(Common.empty(null)).toBe(true);
    expect(Common.empty(0)).toBe(true);
    expect(Common.empty(false)).toBe(true);
    expect(Common.empty(undefined)).toBe(true);
    expect(Common.empty('')).toBe(true);
    expect(Common.empty({})).toBe(true);
    expect(Common.empty([])).toBe(true);

    // 非空值
    expect(Common.empty('1')).toBe(false);
    expect(Common.empty(1)).toBe(false);
    expect(Common.empty(true)).toBe(false);
    expect(Common.empty({a:1})).toBe(false);
    expect(Common.empty([1])).toBe(false);
});