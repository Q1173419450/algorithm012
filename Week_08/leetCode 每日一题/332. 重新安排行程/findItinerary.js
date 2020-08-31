/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

var findItinerary = function(tickets) {
    const res = ['JFK'];
    const map = {};

    for(let ticket of tickets) {
        const [from, to] = ticket;
        if (!map[from]) {
            map[from] = [];
        }
        map[from].push(to);
    }

    console.log(map);

    for(let city in map) {
        map[city].sort();
    }

    console.log(map);

    dfs('JFK', 0, map, tickets, res);

    return res;
};

/**
 * 
 * @param {*} city 
 * @param {*} used 
 * @param {*} map 
 * @param {*} tickets 
 * @param {*} res 
 */
var dfs = function(city, used, map, tickets, res) {
    if (used == tickets.length) {
        return true
    }

    const nextCities = map[city];
    if (!nextCities || nextCities.length == 0) {
        return false
    }
    for(let i = 0; i < nextCities.length; i++) {
        const next = nextCities[i];
        nextCities.splice(i, 1);
        res.push(next);
        if (dfs(next, used + 1, map, tickets, res)) {
            return true;
        } else {
            nextCities.splice(i, 0, next);
            res.pop();
        }
    }
}
let arr = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
console.log(findItinerary(arr))