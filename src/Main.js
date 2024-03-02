"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLTree_1 = require("./AVLTree");
var avlObj = new AVLTree_1.default();
avlObj.insert(50);
avlObj.insert(55);
avlObj.insert(12);
avlObj.insert(33);
console.log("printing using inorder");
avlObj.inOrderTraversal(avlObj.root);
avlObj.showHeight(avlObj.root);