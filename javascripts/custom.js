(function () {
    var module = {


        createNodes: function () {
            var bodyNode, divNode, commentNode;
            /**
             * Returns a list of elements with the given tag name and namespace.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByTagName
             */
            bodyNode = document.getElementsByTagName("body")[0];

            /**
             * Creates a new element with the given tag name.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createElement
             */
            divNode = document.createElement("div");
            divNode.innerHTML = "DOM node created for creation!";
            /**
             * Insert a Node as the last child node of this element.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Node.appendChild
             */
            bodyNode.appendChild(divNode);

            /**
             * Returns a duplicate of the node on which this method was called.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Node.cloneNode
             */
            divNode = divNode.cloneNode(true);
            divNode.id = "updateId";
            divNode.innerHTML = "DOM node created for update!";
            bodyNode.appendChild(divNode);

            // Create a new element
            divNode = document.createElement("div");
            divNode.id = "deleteId";
            divNode.innerHTML = "DOM node created for removal!";
            /**
             * Inserts the first Node given in a parameter immediately before the second, child of this element, Node.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore
             */
            bodyNode.insertBefore(divNode);


            // Comment node
            commentNode = document.createComment("Comment in HTML");
            bodyNode.appendChild(commentNode);

        },

        retrieveNodes: function () {

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
            document.querySelectorAll("div.someClass p.someOtherClass");

        },

        updateNodes: function () {
            var node;
            // get node
            node = document.getElementById("updateId");
            node.innerHTML = "DOM node created for update! (updated)";
        },

        deleteNodes: function () {
            var node;
            /**
             * Removes a child node from the current element, which must be a child of the current node.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild
             */
            node = document.getElementById("deleteId");
            node.parentNode.removeChild(node);
        },

        init: function () {
            crud.createNodes();
            crud.retrieveNodes();
            crud.updateNodes();
            crud.deleteNodes();
        }


    };

    window.crud = module;

}());

window.addEventListener("load", function () {
    crud.init();
}, false);