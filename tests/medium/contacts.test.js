const Contacts = require('../../src/medium/contacts/solution');

test('Monty Contacts #1', () => {
    let contacts = Contacts();
    contacts.add("Brian")
        .add("Luigi Vercotti")
        .add("King Arthur")
        .add("Sir Lancelot")
        .add("Sir Galahad")
        .add("Sir Bedevere")
        .add("Sir Robin")
        .add("Black Knight")
        .add("Ron Obvious")
        .add("Blue Parrot")
        .add("Mr. Stools")
        .add("Inspector Tiger");
    let result = contacts.search("B");
    expect(result).toEqual(expect.arrayContaining(["Brian", "Black Knight", "Blue Parrot"]));

    let count = contacts.count("B");
    expect(count).toEqual(3);
});

test('Monty Contacts #2', () => {
    let contacts = Contacts();
    contacts.add("Brian")
        .add("Luigi Vercotti")
        .add("King Arthur")
        .add("Sir Lancelot")
        .add("Sir Galahad")
        .add("Sir Bedevere")
        .add("Sir Robin")
        .add("Black Knight")
        .add("Ron Obvious")
        .add("Blue Parrot")
        .add("Mr. Stools")
        .add("Inspector Tiger");
    let result = contacts.search("Sir", 2);
    expect(result).toEqual(expect.arrayContaining([ 'Sir Lancelot', 'Sir Galahad' ]));
    let count = contacts.count("Sir");
    expect(count).toEqual(4);
});