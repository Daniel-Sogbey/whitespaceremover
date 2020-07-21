# @whitespaceremover

![npm (scoped)](https://img.shields.io/npm/v/@dan-sogbey/whitespaceremover)
[![GitHub stars](https://img.shields.io/github/stars/Daniel-Sogbey/whitespaceremover)](https://github.com/Daniel-Sogbey/whitespaceremover/stargazers)
[![GitHub license](https://img.shields.io/github/license/Daniel-Sogbey/whitespaceremover)](https://github.com/Daniel-Sogbey/whitespaceremover)
[![GitHub forks](https://img.shields.io/github/forks/Daniel-Sogbey/whitespaceremover)](https://github.com/Daniel-Sogbey/whitespaceremover/network)
[![GitHub issues](https://img.shields.io/github/issues/Daniel-Sogbey/whitespaceremover)](https://github.com/Daniel-Sogbey/whitespaceremover/issues)

It's the simplest npm module

<h1>INSTALL</h1>

\$ npm install @dan-sogbey/whitespaceremover

<h1>USAGE</h1>
const tiny = require("@dan-sogbey/whitespaceremover");

whitespaceremover("So much space!");
//=> "Somuchspace!"

whitespaceremover(1337);
//=> Uncaught TypeError: Tiny wants a string!
// at whitespaceremover (<anonymous>:2:41)
// at <anonymous>:1:1
