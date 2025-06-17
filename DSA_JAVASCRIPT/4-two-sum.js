
const obj = {
    api_base_url : "xyz",
    api_base_url2 : this.api_base_url + "abc",
    santu: function(){
        return this.api_base_url;
    }
}
console.log(this)

console.log(obj.santu());