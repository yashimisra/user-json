// add function

// success case
//  should give the the array of friends if user is present
//  should give 'no user present' if user is not present

// failure
//  should give invalid user name if user name is number
//  should give invalid user name if user name is an array
const findFriends = require('./user');
const add = require('./user');
describe('findFriends function', function() {
    it('should give the the array of friends if user is present', function() {
        const spy=jest.spyOn(console,"log")
        const ans=findFriends("Tisha Ryan")
        expect (spy).toHaveBeenCalledWith([{ id: 0, name: 'Rhonda Tran' },
        { id: 1, name: 'Wiley Underwood' },
        { id: 2, name: 'Jeri Mendoza' }])
    });
    it('should give no such user present if user is not present', function() {
        const spy=jest.spyOn(console,"log")
        const ans=findFriends("Yashi Misra")
        expect (spy).toHaveBeenCalledWith('no such user present')
    });
    it('should give invalid user name if user name is number', function() {
        const spy=jest.spyOn(console,"log")
        const ans=findFriends(67)
        expect (spy).toHaveBeenCalledWith('invalid user name')
    });
    it('should give invalid user name if user name is an array', function() {
        const spy=jest.spyOn(console,"log")
        const ans=findFriends([1,3,56])
        expect (spy).toHaveBeenCalledWith('invalid user name')
    });
});
//./node_modules/.bin/jest.cmd ./user.test.js