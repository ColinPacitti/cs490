var SaleRecords = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
	return {
	    records: [],
	    mark: 1
	}
    },
    componentWillMount: function() {
	//var ref = ("https://CS490-Sales-Marketing.firebaseio.com/sales");
	ref = firebase.database().ref('sales');
	this.bindAsArray(ref, "records", function(err){
	    console.warn(err);
	});
    },
    render: function() {
	var _this = this;
	var createItem = function(item, index) {
	    return (
		    <tr key={index} className={item['received'] ? "success" : "danger"}>
		    <th>{ item['.key'] }</th>
		    <th>{ item['name'] }</th>
		    <th>{ item['quantity'] }</th>
		    <th>{ item['amount'] }</th>
		    <th>{ item['customer'] }</th>
		    <th>{ item['received'] ? "Received" : "Pending" }</th>
		    </tr>
		);
	};
	return (<tbody>
		<tr className="info">
                <td>ID</td>
                <td>Product</td>
                <td>Quantity</td>
                <td>Amount</td>
                <td>Customer</td>
                <td>Payment</td>
                </tr>
		{ this.state.records.map(createItem) }
		</tbody>);
    }
});
ReactDOM.render(<SaleRecords />, document.getElementById('sale_records'));

var CampaignRecords = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
	return {
	    records: [],
	    mark: 2
	}
    },
    componentWillMount: function() {
	//var ref = ("https://CS490-Sales-Marketing.firebaseio.com/sales");
	ref = firebase.database().ref('campaigns');
	this.bindAsArray(ref, "records", function(err){
	    console.warn(err);
	});
    },
    render: function() {
	var _this = this;
	var createItem = function(item, index) {
	    return (
		    <tr key={index} className="success">
		    <th>{ item['.key'] }</th>
		    <th>{ item['name'] }</th>
		    <th>{ item['planner'] }</th>
		    <th>{ item['type'] }</th>
		    </tr>
		);
	};
	return (<tbody>
		<tr className="info">
                <td>ID</td>
                <td>Name</td>
                <td>Creater</td>
                <td>Type</td>
                </tr>
		{ this.state.records.map(createItem) }
		</tbody>);
    }
});

ReactDOM.render(<CampaignRecords />, document.getElementById('campaign_records'));

var CustomerRecords = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
	return {
	    records: [],
	    mark: 2
	}
    },
    componentWillMount: function() {
	ref = firebase.database().ref('customers');
	this.bindAsArray(ref, "records", function(err){
	    console.warn(err);
	});
    },
    render: function() {
	var _this = this;
	var createItem = function(item, index) {
	    return (
		    <tr key={index} className="success">
		    <th>{ item['.key'] }</th>
		    <th>{ item['name'] }</th>
		    <th>{ item['shipping_addr'] }</th>
		    <th>{ item['billing_addr'] }</th>
		    <th>{ item['email'] }</th>
		    </tr>
		);
	};
	return (<tbody>
		<tr className="info">
                <td>ID</td>
		<td>Name</td>
		<td>Shipping Address</td>
                <td>Billing Address</td>
                <td>Email</td>
                </tr>
		{ this.state.records.map(createItem) }
		</tbody>);
    }
});

ReactDOM.render(<CustomerRecords />, document.getElementById('customer_records'));

var FeedbackRecords = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
	return {
	    records: [],
	    mark: 2
	}
    },
    componentWillMount: function() {
	ref = firebase.database().ref('comments');
	this.bindAsArray(ref, "records", function(err){
	    console.warn(err);
	});
    },
    render: function() {
	var _this = this;
	var createItem = function(item, index) {
	    return (
		    <tr key={index} className={item['grade']> 0.6 ? 'success' : "danger"}>
		    <th>{ item['.key'] }</th>
		    <th>{ item['customer'] }</th>
		    <th>{ item['grade'] }</th>
		    <th>{ item['saleId'] }</th>
		    <th>{ item['salesperson'] }</th>
		    <th>{ item['target'] }</th>
		    <th>{ item['text'] }</th>
		    </tr>
		);
	};
	return (<tbody>
		<tr className="info">
		<td>ID</td>
                <td>Name</td>
		<td>Grade</td>
		<td>Sale ID</td>
                <td>Sales Person</td>
                <td>Type of Services</td>
		<td>text</td>
                </tr>
		{ this.state.records.map(createItem) }
		</tbody>);
    }
});

ReactDOM.render(<FeedbackRecords />, document.getElementById('feedback_records'));

var CamRecords = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
	return {
	    records: [],
	    mark: 2
	}
    },
    componentWillMount: function() {
	ref = firebase.database().ref('Campaign_feedbacks');
	this.bindAsArray(ref, "records", function(err){
	    console.warn(err);
	});
    },
    render: function() {
	var _this = this;
	var createItem = function(item, index) {
	    var deleted = 'UNKNOW';
	    var opened = 'UNKNOW';
	    var stay_time = 'UNKNOW';
	    if ('opened' in item['response']){
		opened = item['response']['opened'];
	    }

	    if ('deleted' in item['response']){
		deleted = item['response']['deleted'];
	    }

	    if ('stay_time' in item['response']){
		stay_time = item['response']['stay_time'];
	    }
	    
	    //var opened = 'opened' in item['response'] ? item['target']['opened'] : 'UNKNOW';
	    //var stay_time = 'stay_time' in item['response'] ? item['text']['stay_time'] : 'UNKNOW';
	    return (
		    <tr key={index} className={deleted=='false' ? 'success' : "danger"}>
		    <th>{ item['.key'] }</th>
		    <th>{ item['campaign'] }</th>
		    <th>{ item['customer'] }</th>
		    <th>{ item['recorder'] }</th>
		    <th>{ deleted }</th>
		    <th>{ opened }</th>
		    <th>{ stay_time }</th>
		    </tr>
		);
	};
	return (<tbody>
		<tr className="info">
		<td>ID</td>
		<td>Campaign Name</td>
                <td>Customer</td>
		<td>Recorder</td>
		<td>deleted</td>
                <td>opened</td>
                <td>stay_time</td>
                </tr>
		{ this.state.records.map(createItem) }
		</tbody>);
    }
});

ReactDOM.render(<CamRecords />, document.getElementById('cam_feedback_records'));
