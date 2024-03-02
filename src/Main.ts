import AVLTree from "./AVLTree";
let avlObj= new AVLTree();
avlObj.insert(50);
avlObj.insert(55);
avlObj.insert(12);
avlObj.insert(33);

console.log("printing using inorder");
avlObj.inOrderTraversal(avlObj.root);
avlObj.showHeight(avlObj.root);
