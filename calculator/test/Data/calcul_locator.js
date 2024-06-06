class myCalculLocators { 
    getnbrs(nbr) {
        return $(`~${nbr}`)}

    getmath(cal) {
        return $(`~${cal}`);}
    
    get toequal(){
        return $("id:com.google.android.calculator:id/result_final")
    }

    get results(){
        return $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]')
    }
}

module.exports = new myCalculLocators();