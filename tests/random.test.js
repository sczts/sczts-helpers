import Random from "../src/Random"

test('helper_random_string', () => {
    expect(Random.string().length).toBe(32);
    expect(Random.string(32, 'alpha_num')).toMatch(/\w{32}/);
    expect(Random.string(32, 'alpha_dash')).toMatch(/[\w-_]{32}/);
});

test('helper_random_number', () => {
    let num1 = Random.number();
    let num2 = Random.number(3, 6);
    let num3 = Random.number(100000, 999999);
    let num4 = Random.number(0, 1);
    
    expect(0 <= num1 && num1 <= 100).toBe(true);
    expect(3 <= num2 && num2 <= 6).toBe(true);
    expect(100000 <= num3 && num3 <= 999999).toBe(true);
    expect(0 <= num4 && num4 <= 1).toBe(true);
    
});