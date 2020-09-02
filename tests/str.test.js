import Str from "../src/Str"

test('helper_str_start', () => {
    expect(Str.start('value1', 'val')).toBe(true);
    expect(Str.start('value1', '1val')).toBe(false);
});

test('helper_str_end', () => {
    expect(Str.end('1value1', '1')).toBe(true);
    expect(Str.end('/path/to', '/')).toBe(false);
});

test('helper_str_startWith', () => {
    expect(Str.startWith('www.baidu.com', 'http://')).toBe('http://www.baidu.com');
    expect(Str.startWith('http://www.baidu.com', 'http://')).toBe('http://www.baidu.com');
});

test('helper_str_endWith', () => {
    expect(Str.endWith('/path/to', '/')).toBe('/path/to/');
    expect(Str.endWith('/path/to/', '/')).toBe('/path/to/');
});

test('helper_str_removeHtmlTag', () => {
    expect(Str.removeHtmlTag("<p>12345</p>")).toBe('12345');
    expect(Str.removeHtmlTag("<p>123&nbsp;45</p>")).toBe('12345');
    expect(Str.removeHtmlTag("<p>123&nbsp;45</p>",' ')).toBe('123 45');
});