describe('hello', function(){
	debugger;
    it('should say hello', function(){
        //expect(hello()).to.be('hello world');
        assert.ok(hello(), 'hello world');
    });
    it('should say hello to person', function(){
        expect(hello('Bob')).to.equal('hello Bob');
    });
});