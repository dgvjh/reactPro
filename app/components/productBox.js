var React = require('react');
var ProductBox;
ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox">
                hello react&webpack!
            </div>
        );
    }
});

module.exports = ProductBox;