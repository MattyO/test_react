describe("Simple Component", function() {

  var instance;
  var container = document.createElement("div");

  beforeEach(function() {
      instance = React.addons.TestUtils.renderIntoDocument(React.createElement(SimpleComponent));
  });

  //afterEach(function(){
  //    if (instance && instance.isMounted()) {
  //        // Only components with a parent will be unmounted
  //        React.unmountComponentAtNode(instance.getDOMNode().parent);
  //    }
  //});

  it("should have the text hello world", function(){
      var heading = React.addons.TestUtils.findRenderedDOMComponentWithTag(instance, "h1");
      expect(heading.getDOMNode().textContent).toBe("Hello World");
  });

});

