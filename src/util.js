const makeParseFunction = function(charOpen, charClose, before, after) {
    let n = before.length +
            after.length -
            charOpen.length -
            charClose.length;

    return function (string) {
        let startIdx = 0;
        let bracketIndices = [];
        let open = false;

        for (let [idx, char] of string.split("").entries()) {
            if (char === charOpen && !open) {
                startIdx = idx;
                open = true;
            }
            if (char === charClose && open) {
                open = false;
                bracketIndices.push([startIdx, idx]);
            }
        }

        bracketIndices.forEach((bracket, idx) => {
            let start = bracket[0] + n*idx;    // Account for extra characters added to string
            let end = bracket[1] + n*idx;
            string =
                string.substring(0, start) +
                before +
                string.substring(start + 1, end) +
                after + 
                string.substring(end + 1);
        });

        return string;
    };
}

export { makeParseFunction };