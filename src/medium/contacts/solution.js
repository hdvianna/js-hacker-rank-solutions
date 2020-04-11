function Contacts() {

    let root = newLeaf();
    let index = {};

    return {
        add(name) {
            add(name);
            return this;
        },
        search(query, limit) {
            return search(query.toLowerCase(), limit);
        },
        count(query) {
            return count(query);
        }
    };

    function newLeaf() {
        return {
            letters: {},
            contacts: [],
            count: 0
        }
    }

    function add(contact) {
        let pointer = root;
        let lcaseContact = contact.toLowerCase();
        let substr = "";
        for (let i = 0; i < lcaseContact.length; i++) {
            substr = substr.concat(lcaseContact[i]);
            let letter = lcaseContact[i];
            if (!(letter in pointer.letters)) {
                pointer.letters[letter] = newLeaf();
                index[substr] = pointer.letters[letter];
            }
            pointer = pointer.letters[letter];
            pointer.count++;
        }
        pointer.contacts.push(contact);
    }

    function count(query) {
        let lowerCaseQuery = query.toLowerCase();
        let count = 0;
        if (lowerCaseQuery in index) {
            count = index[lowerCaseQuery].count;
        }
        return count;
    }

    function search(query, limit) {
        let result = [];
        if (query in index) {
            let pointer = index[query];
            result = depthSearch(pointer, limit);
            if (limit) {
                result = result.slice(0, limit);
            }
        }
        return result;
    }

    function depthSearch(pointer, limit) {
        if (pointer) {
            let results = pointer.contacts.concat([]);
            for (let letter in pointer.letters) {
                if (!limit || results.length < limit) {
                    let next = pointer.letters[letter];
                    let depthResults = depthSearch(next, limit);
                    results = results.concat(depthResults);
                }
            }
            return results;
        } else {
            return [];
        }
    }


}

module.exports = Contacts;