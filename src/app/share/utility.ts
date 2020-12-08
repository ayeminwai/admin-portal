export class Utility {
    constructor() { }

    currencyFormat(p: any) {
        if (p != '' && p != '-' && !isNaN(p)) {
            return (+p).toFixed(2);
        } else {
            return "0.00";
        }
    }

    formatMoney(n: number) {
        return (+n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

    formatMoneyByDecimal(n: number, f: number) {
        return (+n).toFixed(f).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

    validateUrl(d: any) {
        var pattern = /(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/;
        return pattern.test(d);
    }

    deepCloneArray(oldArray: Object[]) { //For Clone Array
        return oldArray.map(e => Object.assign({}, e));
    }

    authOption(obj: Object) {
        return Object.entries(obj).map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value)).join("&");
    }

    getDefaultImage() {
        return 'assets/img/default.jpg';
    }

    getNewDate() {
        return new Date().toISOString().substring(0, 10);
    }

    getTodayDate() {
        var d = new Date();
        var datestring = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
        return datestring;
    }

    getSystemDate(local : string) {
        let _date: Date = this.convertTZ(new Date(), local);
        console.log(JSON.stringify(_date.getTimezoneOffset()))
        let ddate = this.formatdigits(_date.getDate());
        let month = this.formatdigits(_date.getMonth() + 1);
        let year = _date.getFullYear();
        let hours = this.formatdigits(_date.getHours());
        let minutes = this.formatdigits(_date.getMinutes());
        let seconds = this.formatdigits(_date.getSeconds());
        return ddate + month + year + hours + minutes + seconds;
    }

    formatdigits(val) {
        val = val.toString();
        return val.length == 1 ? "0" + val : val;
    }

    convertTZ(date: Date, local: string) {
        if(local)
            return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: local }));
        else
            return new Date();
    }
}
