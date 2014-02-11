(function () {
    var module = {


        createNodes: function () {
            var bodyNode, divNode, commentNode;
            // Get body node
            bodyNode = document.getElementsByTagName("body")[0];

            // Create a new element
            divNode = document.createElement("div");
            divNode.innerHTML = "It works!";

            // Append new node to body node
            bodyNode.appendChild(divNode);

            commentNode = document.createComment("Comment in HTML");

            bodyNode.appendChild(commentNode);




        },

        retrieveNodes: function() {

            /**
             * Returns an object reference to the identified element.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementById
             */
            document.getElementById("someId");

            /**
             * Returns a list of elements with the given class name.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByClassName
             */
            document.getElementsByClassName("someClass");

            /**
             * Returns a list of elements with the given tag name and namespace.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByTagName
             */
            document.getElementsByTagName("body");

            /**
             * Returns a list of elements with the given name.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByName
             */
            document.getElementsByName("someName");

            /**
             * Returns the first Element node within the document, in document order, that matches the specified selectors.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelector
             */
            document.querySelector("div.someClass p.someOtherClass");

            /**
             * Returns a list of all the Element nodes within the document that match the specified selectors.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll
             */
            document.querySelector("div.someClass p.someOtherClass");

        },

        updateNodes: function() {
            var node;
            // get node
            node = document.getElementById("a");
            node.innerHTML = "Hello again!";



        },

        deleteNodes: function() {

        },

        init: function() {
            crud.createNodes();
            crud.retrieveNodes();
            crud.updateNodes();
            crud.deleteNodes();
        }


    };

    window.crud = module;

}());

window.onload=function() {
    crud.init();

}