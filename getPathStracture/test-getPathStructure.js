describe("getPathStructureの引数処理について", function() {

    var ret = null;

    beforeEach(function() {
        ret = null;
    });
    it("引数が無い場合、location.hrefを使って処理をする。更に最初の階層のみ", function() {
        ret = getPathStructure();
        expect(ret).toBe(null);
    });

    it("階層が存在しない場合、nullを返却する", function() {
        ret = getPathStructure("http://example.com/");
        expect(ret).toBe(null);
    });

    it("第2階層以上存在する場合、取得先を指定しない場合は全部を取得する", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd");
        expect(ret).toBe("1st:2nd:3rd");
    });

    it("第2引数を指定すると取得する階層の始まりを指定できる", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd", 1);
        expect(ret).toBe("2nd:3rd");
    });
    it("第2引数が階層数よりも大きい場合はfalseを返却する", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd", 10);
        expect(ret).toBe(false);
    });
    it("第3引数が指定された場合は階層の終わりを指定できる", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd", null, 1);
        expect(ret).toBe("1st");
    });
    it("第3引数が実際の階層数よりも大きい場合は最後まで取得する", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd", null, 10);
        expect(ret).toBe("1st:2nd:3rd");
    });
    it("両方とも異常値の場合はfalse", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd/4th/5th", 10, 20);
        expect(ret).toBe(false);
    });
    it("第4引数を指定すると区切り文字列を変えられる", function() {
        ret = getPathStructure("http://example.com/1st/2nd/3rd", null, null, "__path__");
        expect(ret).toBe("1st__path__2nd__path__3rd");
    });


});

describe("getPathStructure テスト", function(){
	it("スラッシュ区切りで終わりの場合は最下層まで拾う",function(){
        ret = getPathStructure("http://example.com/1st/2nd/3rd");
        expect(ret).toBe("1st:2nd:3rd");
	});
	it("ファイル名で終わりの場合はファイル名まで",function(){
        ret = getPathStructure("http://example.com/1st/2nd/3rd/index.html");
        expect(ret).toBe("1st:2nd:3rd:index.html");
	});
});