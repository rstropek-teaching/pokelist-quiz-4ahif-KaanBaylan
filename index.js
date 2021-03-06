var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pokemonList = document.getElementById('pokemons');
var prevPokemon = '';
var nextPokemon = '';
window.onload = function () {
    getPokes("");
};
function getPokes(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, pokelist, html, _i, _a, pokemon;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(url == "")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch('https://pokeapi.co/api/v2/pokemon/?limit=18')];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    pokelist = _b.sent();
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, fetch(url)];
                case 4:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 5:
                    pokelist = _b.sent();
                    _b.label = 6;
                case 6:
                    html = '';
                    for (_i = 0, _a = pokelist.results; _i < _a.length; _i++) {
                        pokemon = _a[_i];
                        html += "<div class=\"col-md-4\">";
                        html += "<div class=\"thumbnail\">";
                        //if you want to see the Pokemons with pictures uncomment the following lines
                        //It takes then a lot of time to load the whole website, but it looks good :D
                        // const response = await fetch(pokemon.url);
                        // const poki = await response.json();
                        // html += `<img src='${poki.sprites.front_default}' style="width: 100%;">`;
                        html += "<div class=\"caption\">";
                        html += "<p align=\"center\"> " + pokemon.name + " </p>";
                        html += "<button align=\"center\" class='btn btn-default' onclick=info('" + pokemon.url + "')>Informationen</button>";
                        html += "</div>";
                        html += "</div>";
                        html += "</div>";
                    }
                    prevPokemon = pokelist.previous;
                    nextPokemon = pokelist.next;
                    pokemonList.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function info(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, poke, info, _i, _a, ability;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    poke = _b.sent();
                    info = "Name: ";
                    info += poke.name + "\n";
                    info += "Weight: " + poke.weight + "\n";
                    info += "Abbilities: \n";
                    for (_i = 0, _a = poke.abilities; _i < _a.length; _i++) {
                        ability = _a[_i];
                        info += ability.ability.name + "<br>";
                    }
                    alert(info);
                    return [2 /*return*/];
            }
        });
    });
}
$("#next").click(function () {
    if (nextPokemon == '') {
        getPokes("");
    }
    else {
        getPokes(nextPokemon);
    }
});
$("#prev").click(function () {
    if (nextPokemon == '') {
        getPokes("");
    }
    else {
        getPokes(prevPokemon);
    }
});
